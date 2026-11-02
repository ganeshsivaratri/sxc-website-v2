import heroImage from '../../assets/images/sxc-pointingdown.png'
import { useRef, useState } from 'react'
import audioFile from '../../assets/Audio/why-projects-matter.mp3'
import './ProjectsHero.css'

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="projects-hero-inner">
        <div className="projects-hero-content">
          <div className="projects-label">
            <span className="projects-label-dot" />
            PROJECTS
          </div>

          <h1>
            Companies Need
            <br />
            Experience.
            <br />
            Build It Through
            <br />
            <span>Real Projects.</span>
          </h1>

          <p className="projects-hero-description">
            Experience doesn’t come from certificates alone.
            It comes from building real projects, solving
            problems and creating work you can demonstrate.
          </p>

          <div className="projects-hero-actions">
            <a href="#projects" className="projects-primary-btn">
              Explore Projects <span>↗</span>
            </a>

            <a href="#sxc-audio" className="projects-secondary-btn">
              <span>♫</span> Listen to Audio
            </a>
          </div>
        </div>

        <div className="projects-hero-visual">
          <div className="projects-hero-circle" />

          <img
            src={heroImage}
            alt="SXC student holding a laptop"
            className="projects-hero-character"
          />

          <div className="projects-question-mark">?</div>
          <div className="projects-question-marks">???</div>
        </div>
      </div>

      <ProjectsAudioPlayer />
      <ProjectsGoals />
    </section>
  )
}

function ProjectsAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return '0:00'

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleSeek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <div className="sxc-audio-card" id="sxc-audio">
      <div className="sxc-audio-icon">
        <span>🎧</span>
      </div>

      <div className="sxc-audio-info">
        <h2>Listen to the Audio</h2>
        <p>A quick voice from SXC (తెలుగులో)</p>
      </div>

      <button
        className="sxc-audio-play"
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
      >
        {isPlaying ? 'Ⅱ' : '▶'}
      </button>

      <div className="sxc-audio-progress">
        <div className="sxc-waveform">
          {Array.from({ length: 34 }).map((_, index) => (
            <span
              key={index}
              style={{
                height: `${12 + ((index * 17 + 13) % 28)}px`,
              }}
            />
          ))}
        </div>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => handleSeek(Number(event.target.value))}
          className="sxc-audio-seek"
          aria-label="Audio progress"
        />
      </div>

      <div className="sxc-audio-time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      <span className="sxc-audio-volume">◖))</span>

      <audio
        ref={audioRef}
        src={audioFile}
        preload="metadata"
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}

function ProjectsGoals() {
  return (
    <section className="projects-goals" id="projects">
      <div className="projects-goals-heading">
        <span className="projects-goals-label">WHY WE BUILD</span>

        <h2>
          Our Projects <span>Goal.</span>
        </h2>

        <p>
          We don't just build projects. We build solutions that
          create real value, real experience and real opportunities.
        </p>
      </div>

      <div className="projects-goals-track">
        <article className="projects-goal-card">
          <span className="projects-goal-number">01</span>
          <div className="projects-goal-icon">💰</div>
          <h3>Revenue-Generating Projects</h3>
          <p>
            Build projects that can generate income, attract
            customers and create real business opportunities.
          </p>
          <span className="projects-goal-tag">CREATE VALUE</span>
        </article>

        <article className="projects-goal-card">
          <span className="projects-goal-number">02</span>
          <div className="projects-goal-icon">📱</div>
          <h3>Real Users, Real Usage</h3>
          <p>
            Create products and applications that people
            can actually use in their everyday lives.
          </p>
          <span className="projects-goal-tag">BUILD FOR PEOPLE</span>
        </article>

        <article className="projects-goal-card">
          <span className="projects-goal-number">03</span>
          <div className="projects-goal-icon">💡</div>
          <h3>Solve Real Problems</h3>
          <p>
            Identify practical problems and build useful
            solutions instead of creating demo-only projects.
          </p>
          <span className="projects-goal-tag">SOLVE PROBLEMS</span>
        </article>

        <article className="projects-goal-card">
          <span className="projects-goal-number">04</span>
          <div className="projects-goal-icon">🚀</div>
          <h3>Build Your Portfolio</h3>
          <p>
            Create impressive projects that demonstrate
            your actual skills, creativity and capabilities.
          </p>
          <span className="projects-goal-tag">SHOW YOUR SKILLS</span>
        </article>

        <article className="projects-goal-card">
          <span className="projects-goal-number">05</span>
          <div className="projects-goal-icon">🎯</div>
          <h3>Industry-Ready Experience</h3>
          <p>
            Gain practical experience, improve your technical
            skills and prepare for real-world opportunities.
          </p>
          <span className="projects-goal-tag">BE INDUSTRY READY</span>
        </article>
      </div>
    </section>
  )
}
