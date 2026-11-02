import { useState } from 'react'
import './InterviewPriority.css'

// =====================================================
// SECTION 3: MOST IMPORTANT FOR INTERVIEW IN 2026
// This component is independent of the hero and header.
// =====================================================

// All options displayed to the user.
// Their display order does not determine the correct answer.
const options = [
  'CGPA',
  'Skills',
  'Internship',
  'Projects',
  'Project Summary',
  'Certifications',
  'GitHub',
  'LinkedIn',
  'Love Failure CEO',
]

// Expected ranking used when the user submits their answer.
const correctOrder = [
  'CGPA',
  'Skills',
  'Projects',
  'Project Summary',
  'Internship',
  'Certifications',
  'GitHub',
  'LinkedIn',
  'Love Failure CEO',
]

type FeedbackType = 'correct' | 'incorrect' | null

export default function InterviewPriority() {
  // Stores selected options in the order the user selects them.
  // Index 0 receives priority 1, index 1 receives priority 2, etc.
  const [selected, setSelected] = useState<string[]>([])

  // Stores the submission result.
  const [feedback, setFeedback] = useState<FeedbackType>(null)

  // -----------------------------------------------------
  // OPTION SELECTION
  // Selecting an option assigns its priority number.
  // Selecting it again removes it and renumbers the rest.
  // -----------------------------------------------------
  const handleSelect = (option: string) => {
    // Clear old feedback whenever the user changes their answer.
    setFeedback(null)

    setSelected((current) => {
      // Remove the option if it has already been selected.
      if (current.includes(option)) {
        return current.filter((item) => item !== option)
      }

      // Prevent selecting more than the available nine options.
      if (current.length >= options.length) {
        return current
      }

      // Add the new selection at the end of the ranking.
      return [...current, option]
    })
  }

  // -----------------------------------------------------
  // RESET
  // Clears all selections and any previous feedback.
  // -----------------------------------------------------
  const handleReset = () => {
    setSelected([])
    setFeedback(null)
  }

  // -----------------------------------------------------
  // SUBMISSION AND ANSWER VALIDATION
  // The user must rank all nine options before submitting.
  // -----------------------------------------------------
  const handleSubmit = () => {
    if (selected.length !== options.length) {
      return
    }

    // The answer is correct only if every position matches.
    const isCorrect = correctOrder.every(
      (option, index) => selected[index] === option,
    )

    setFeedback(isCorrect ? 'correct' : 'incorrect')
  }

  return (
    <section
      className="interview-priority"
      id="interview-priority"
      aria-labelledby="interview-priority-title"
    >
      <div className="interview-priority__inner">
        {/* ==============================================
            SECTION 3A: HEADING AND INSTRUCTIONS
            ============================================== */}
        <header className="interview-priority__header">
          <p className="interview-priority__eyebrow">
            <span aria-hidden="true" />
            ACCORDING TO YOU
          </p>

          <h2
            className="interview-priority__title"
            id="interview-priority-title"
          >
            Most Important
            <br />
            For Interview <span>in 2026?</span>
          </h2>

          <p className="interview-priority__description">
            Select each option in your priority order.
            Your first choice is priority 1.
          </p>
        </header>

        {/* ==============================================
            SECTION 3B: NINE PRIORITY OPTIONS
            Arranged in a responsive 3-column grid.
            ============================================== */}
        <div
          className="interview-priority__options"
          role="group"
          aria-label="Interview priority options"
        >
          {options.map((option) => {
            // Determine whether the option has been selected.
            const selectedIndex = selected.indexOf(option)
            const isSelected = selectedIndex !== -1

            // Convert the array index to a visible priority number.
            const priorityNumber = selectedIndex + 1

            return (
              <button
                key={option}
                type="button"
                className={[
                  'priority-pill',
                  isSelected ? 'priority-pill--selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleSelect(option)}
                aria-pressed={isSelected}
                aria-label={
                  isSelected
                    ? `${option}, priority ${priorityNumber}. Select to remove it.`
                    : `${option}. Select to assign the next priority.`
                }
              >
                {/* Priority number appears when selected. */}
                <span
                  className="priority-pill__number"
                  aria-hidden="true"
                >
                  {isSelected
                    ? String(priorityNumber).padStart(2, '0')
                    : ''}
                </span>

                {/* Option label. */}
                <span className="priority-pill__label">
                  {option}
                </span>
              </button>
            )
          })}
        </div>

        {/* ==============================================
            SECTION 3C: RANKING COUNT AND ACTION BUTTONS
            ============================================== */}
        <div className="interview-priority__controls">
          <p
            className="interview-priority__count"
            aria-live="polite"
          >
            <strong>{selected.length}</strong> / 9 ranked
          </p>

          <div className="interview-priority__buttons">
            {/* Reset all selections. */}
            <button
              className="priority-reset"
              type="button"
              onClick={handleReset}
              disabled={
                selected.length === 0 && feedback === null
              }
            >
              Reset
            </button>

            {/* Submission stays disabled until all nine are ranked. */}
            <button
              className="priority-submit"
              type="button"
              onClick={handleSubmit}
              disabled={selected.length !== options.length}
            >
              Submit Priority
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* ==============================================
            SECTION 3D: INLINE FEEDBACK
            No modal and no navigation.
            ============================================== */}
        {feedback && (
          <div
            className={`priority-feedback priority-feedback--${feedback}`}
            role="status"
            aria-live="polite"
          >
            {/* Show success feedback when every position is correct. */}
            {feedback === 'correct' ? (
              <>
                <span
                  className="priority-feedback__icon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <div className="priority-feedback__content">
                  <h3>YES, YOU ARE RIGHT!</h3>
                  <p>
                    This is the correct priority.
                  </p>
                </div>
              </>
            ) : (
              /* Show the expected order when the answer is incorrect. */
              <div
                className={[
                  'priority-feedback__content',
                  'priority-feedback__content--full',
                ].join(' ')}
              >
                <h3>
                  SORRY! ACCORDING TO US, THIS IS OUR PRIORITY.
                </h3>

                <p>
                  Compare your selections with our suggested order:
                </p>

                <ol className="priority-answer-list">
                  {correctOrder.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ol>

                {/* Reset so the user can try the ranking again. */}
                <button
                  type="button"
                  className="priority-try-again"
                  onClick={handleReset}
                >
                  Try Again <span aria-hidden="true">↻</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}