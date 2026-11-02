
import StudentJourneySection1 from '../components/student-journey/StudentJourneySection1'
import StudentJourneySection2 from '../components/student-journey/StudentJourneySection2'
import './StudentJourney.css'

function StudentJourney() {
  return (
    <main className="student-journey-page">
      <StudentJourneySection1 />
      <StudentJourneySection2 />
    </main>
  )
}

export default StudentJourney
