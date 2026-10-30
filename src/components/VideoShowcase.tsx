import { useRef, useState } from 'react'
import buildYourFutureVideo from '../assets/videos/build-your-future.mp4'
import './VideoShowcase.css'

// =====================================================
// SECTION 5: VIDEO SHOWCASE
// Displays the Build Your Future promotional video.
// =====================================================

function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  // =====================================================
  // SECTION 5A: VIDEO PLAYBACK
  // =====================================================

  const handlePlay = async () => {
    const video = videoRef.current

    if (!video) return

    try {
      setHasError(false)
      await video.play()
    } catch {
      setHasError(true)
    }
  }

  // =====================================================
  // SECTION 5B: RETRY VIDEO
  // =====================================================

  const handleRetry = () => {
    const video = videoRef.current

    if (!video) return

    setHasError(false)
    setIsPlaying(false)
    video.load()
  }

  // =====================================================
  // SECTION 5C: VIDEO SECTION UI
  // =====================================================

  return (
    <section
      className="video-showcase"
      id="video-showcase"
      aria-labelledby="video-showcase-title"
    >
      <div className="video-showcase__inner">

        {/* SECTION 5C.1: Heading */}

        <header className="video-showcase__header">
          <p className="video-showcase__eyebrow">
            <span aria-hidden="true" />
            MADE TO BUILD
          </p>

          <h2
            className="video-showcase__title"
            id="video-showcase-title"
          >
            BUILD YOUR <span>FUTURE.</span>
          </h2>

          <p className="video-showcase__description">
            Ideas become reality when you start building.
          </p>
        </header>

        {/* SECTION 5C.2: Video Player */}

        <div className="video-showcase__frame">
          <video
            ref={videoRef}
            className="video-showcase__video"
            src={buildYourFutureVideo}
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPlay={() => {
              setIsPlaying(true)
              setHasError(false)
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={() => {
              setIsPlaying(false)
              setHasError(true)
            }}
            aria-label="Build Your Future promotional video"
          />

          {/* SECTION 5C.3: Custom Play Button */}

          {!isPlaying && !hasError && (
            <button
              className="video-showcase__play"
              type="button"
              onClick={handlePlay}
              aria-label="Play Build Your Future video"
            >
              <span
                className="video-showcase__play-icon"
                aria-hidden="true"
              >
                ▶
              </span>
            </button>
          )}

          {/* SECTION 5C.4: Duration Badge */}

          <span className="video-showcase__duration">
            34 SEC
          </span>

          {/* SECTION 5C.5: Video Error Message */}

          {hasError && (
            <div
              className="video-showcase__error"
              role="alert"
            >
              <p>Video could not be loaded.</p>
              <p>Check that the video file is available.</p>

              <button
                className="video-showcase__retry"
                type="button"
                onClick={handleRetry}
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* SECTION 5C.6: Footer Accent */}

        <div className="video-showcase__footer">
          <span aria-hidden="true" />

          <p>YOUR IDEAS. YOUR TEAM. YOUR CREATION.</p>

          <span aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}

export default VideoShowcase