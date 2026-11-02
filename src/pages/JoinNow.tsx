import JoinForm from '../components/join-now/JoinForm'
import './JoinNow.css'

export default function JoinNow() {
  return (
    <main className="join-page">
      <section className="join-hero">
        <span className="join-hero__eyebrow">JOIN SINTRAX CREATIONS</span>
        <h1>Book Your <span>Seat.</span></h1>
        <p>
          Fill this 30-second form. We continue on WhatsApp —
          book your seat with ₹500, balance before Day 1.
        </p>
      </section>

      <JoinForm />
    </main>
  )
}
