import { useState } from 'react'
import type { FormEvent } from 'react'
import './JoinForm.css'

/* =========================================================
   SXC JOIN — LIVE CONNECTIONS
   ========================================================= */
const WHATSAPP_NUMBER = '919490354451'
const SHEET_WEBAPP_URL =
  'https://script.google.com/macros/s/AKfycbyk8rBPJds_2VKAeKHBxb4qBGL6SjwCJ_QHzc3I2Gofp8Pi81ulSlpxI_UwAu2-gYYy/exec'

type PlanKey = 'plan-1' | 'plan-2' | 'team-a' | 'team-b' | 'rejoin'

const PLANS: Record<PlanKey, { label: string; price: string }> = {
  'plan-1': { label: 'Individual Plan 1', price: '₹2,199' },
  'plan-2': { label: 'Individual Plan 2', price: '₹2,999' },
  'team-a': { label: 'Team Plan A', price: '₹1,999 / head' },
  'team-b': { label: 'Team Plan B', price: '₹2,599 / head' },
  rejoin: { label: 'Rejoin Project', price: '₹1,299' },
}

type JoinType = 'individual' | 'team-ready' | 'need-team'

function planFromUrl(): PlanKey {
  const param = new URLSearchParams(window.location.search).get('plan')
  return param && param in PLANS ? (param as PlanKey) : 'plan-1'
}

export default function JoinForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [college, setCollege] = useState('')
  const [year, setYear] = useState('3rd')
  const [branch, setBranch] = useState('CSE')
  const [plan, setPlan] = useState<PlanKey>(planFromUrl)
  const [joinType, setJoinType] = useState<JoinType>('individual')
  const [teamSize, setTeamSize] = useState('4')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const digits = phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '')
    if (name.trim().length < 3) return setError('Please enter your full name.')
    if (digits.length !== 10) return setError('Enter a valid 10-digit WhatsApp number.')
    if (college.trim().length < 3) return setError('Please enter your college name.')

    setError('')

    const joinText =
      joinType === 'team-ready'
        ? `I have a team of ${teamSize}`
        : joinType === 'need-team'
          ? 'I need a team'
          : 'Just me (individual)'

    // 1) Save the lead to the Google Sheet (silent backup)
    fetch(SHEET_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        name: name.trim(),
        phone: digits,
        college: college.trim(),
        year,
        branch,
        plan: PLANS[plan].label,
        price: PLANS[plan].price,
        joinType: joinText,
        teamSize: joinType === 'team-ready' ? teamSize : '',
      }),
    }).catch(() => {})

    // 2) Open WhatsApp with the message pre-typed
    const message =
      `Hi, I'm ${name.trim()} from ${college.trim()} (${year} Year, ${branch}).\n` +
      `I want to join ${PLANS[plan].label} — ${PLANS[plan].price}.\n` +
      `Joining as: ${joinText}.\n` +
      `My WhatsApp number: ${digits}`

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
    )
    setSent(true)
  }

  return (
    <section className="join-form-section">
      <form className="join-form" onSubmit={handleSubmit} noValidate>
        <div className="join-form__plan-banner">
          You're joining: <strong>{PLANS[plan].label} — {PLANS[plan].price}</strong>
        </div>

        <label className="join-field">
          <span>Full name</span>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="join-field">
          <span>WhatsApp number</span>
          <input
            type="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label className="join-field">
          <span>College</span>
          <input
            type="text"
            placeholder="Your college name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </label>

        <div className="join-form__row">
          <label className="join-field">
            <span>Year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
          </label>

          <label className="join-field">
            <span>Branch</span>
            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option>CSE</option>
              <option>CSE (AI & ML)</option>
              <option>CSE (Data Science)</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="join-field">
          <span>Select your plan</span>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value as PlanKey)}
          >
            {(Object.keys(PLANS) as PlanKey[]).map((key) => (
              <option key={key} value={key}>
                {PLANS[key].label} — {PLANS[key].price}
              </option>
            ))}
          </select>
        </label>

        <div className="join-field">
          <span>How are you joining?</span>
          <div className="join-radio-group">
            <button
              type="button"
              className={joinType === 'individual' ? 'join-radio is-active' : 'join-radio'}
              onClick={() => setJoinType('individual')}
            >
              Just me
            </button>
            <button
              type="button"
              className={joinType === 'team-ready' ? 'join-radio is-active' : 'join-radio'}
              onClick={() => setJoinType('team-ready')}
            >
              I have a team
            </button>
            <button
              type="button"
              className={joinType === 'need-team' ? 'join-radio is-active' : 'join-radio'}
              onClick={() => setJoinType('need-team')}
            >
              I need a team
            </button>
          </div>
        </div>

        {joinType === 'team-ready' && (
          <label className="join-field">
            <span>Team size</span>
            <select value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
              <option value="4">4 members</option>
              <option value="5">5 members</option>
              <option value="6">6 members</option>
            </select>
          </label>
        )}

        {error && <p className="join-form__error">{error}</p>}

        <button type="submit" className="join-form__submit">
          Continue on WhatsApp →
        </button>

        {sent && (
          <p className="join-form__success">
            ✅ WhatsApp opened — just press send there. If it didn't open,
            check your pop-up blocker and tap the button again.
          </p>
        )}

        <p className="join-form__note">
          Next step after we chat: book your seat with ₹500.
          Balance before Day 1. No payment on this page.
        </p>
      </form>
    </section>
  )
}
