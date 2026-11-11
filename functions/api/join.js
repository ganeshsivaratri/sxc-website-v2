/* =========================================================
   POST /api/join — Cloudflare Pages Function (server side)

   The join form will send leads HERE instead of straight to
   Google. This function forwards them to the real Apps
   Script address, which lives ONLY in the Cloudflare secret
   named SHEET_WEBAPP_URL — never in the website code, so
   nobody can see it or spam the sheet directly.

   STATUS: prepared, not yet switched on. To activate:
   1. Cloudflare dashboard -> this Pages project -> Settings
      -> Environment variables: add secret SHEET_WEBAPP_URL.
   2. In JoinForm.tsx, change SHEET_WEBAPP_URL to '/api/join'.
   3. Redeploy the Apps Script (new URL) and put the NEW URL
      in the secret — the old one is public and must die.
   ========================================================= */

export async function onRequestPost(context) {
  const { request, env } = context

  if (!env.SHEET_WEBAPP_URL) {
    return new Response('Join endpoint is not configured yet.', { status: 503 })
  }

  // The form sends JSON as plain text (see JoinForm.tsx);
  // pass the body through exactly as it arrived.
  const body = await request.text()

  let data
  try {
    data = JSON.parse(body)
  } catch {
    return new Response('Bad request.', { status: 400 })
  }

  // Honeypot: real people never fill the hidden "website"
  // field. Bots do — accept silently and save nothing.
  if (data.website) {
    return Response.json({ ok: true })
  }

  const sheetResponse = await fetch(env.SHEET_WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body,
  })

  return Response.json(
    { ok: sheetResponse.ok },
    { status: sheetResponse.ok ? 200 : 502 },
  )
}
