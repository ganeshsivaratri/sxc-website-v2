import './PrivacyPolicy.css'

const SECTIONS: { title: string; body: string }[] = [
  {
    title: '1. What we collect',
    body: "When you fill our Join form or contact us, we collect: your name, WhatsApp number, college name, year and branch of study, the plan you choose, and whether you are joining alone or with a team. If you chat with us on WhatsApp, we also see the messages you send us.",
  },
  {
    title: '2. Why we collect it',
    body: "Only to run SintraX Creations: to contact you about joining, allocate you to a team and batch, plan your project, and support you during the 45-day program. Nothing else.",
  },
  {
    title: '3. Where it is stored',
    body: "Your details are stored in our private student records (Google Sheets) and in our WhatsApp chat with you. Access is limited to the SintraX Creations team.",
  },
  {
    title: '4. What we never do',
    body: "We do not sell, rent, or share your personal details with advertisers or unrelated third parties. We will only share information if the law requires it.",
  },
  {
    title: '5. Payments',
    body: "Payments are made by you directly through UPI. We never see or store your bank details, card numbers, or UPI PIN.",
  },
  {
    title: '6. Your work',
    body: "Projects you build are your work. We may showcase finished student projects on our website and social media with your name — tell us anytime if you don't want your project or name shown, and we will remove it.",
  },
  {
    title: '7. Keeping and deleting your data',
    body: "We keep your details while you are part of SXC and for a reasonable period after, for records and alumni communication. You can ask us anytime to see or delete your details — message us on WhatsApp or email, and we will do it.",
  },
  {
    title: '8. Changes to this policy',
    body: "If we change this policy, the updated version will be posted on this page with a new date.",
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <span className="privacy-hero__eyebrow">LEGAL</span>
        <h1>Privacy <span>Policy</span></h1>
        <p>Last updated: 2 November 2026</p>
      </section>

      <section className="privacy-content">
        {SECTIONS.map((section) => (
          <div className="privacy-block" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        <div className="privacy-block">
          <h2>9. Contact us</h2>
          <p>
            Questions about your data? Reach the SintraX Creations team:
          </p>
          <div className="privacy-contact">
            <a
              className="privacy-contact__btn privacy-contact__btn--whatsapp"
              href="https://wa.me/919490354451"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 94903 54451
            </a>
            <a
              className="privacy-contact__btn privacy-contact__btn--email"
              href="mailto:sintraxcreations@gmail.com"
            >
              sintraxcreations@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
