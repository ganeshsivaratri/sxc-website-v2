import './BuildTicker.css'

const services = [
  'PROJECTS',
  'APPS',
  'WEBSITES',
  'SOFTWARE',
  'CONNECTIONS',
]

function BuildTicker() {
  return (
    <section
      className="build-ticker"
      aria-label="We build projects, apps, websites, software and connections"
    >
      <div className="build-ticker__inner">

        {/* Fixed announcement label */}
        <div className="build-ticker__label">
          <span>WE BUILD</span>
          <span className="build-ticker__colon">:</span>
        </div>

        {/* Continuously scrolling services */}
        <div className="build-ticker__viewport">
          <div className="build-ticker__track">

            {[0, 1].map((copy) => (
              <div
                className="build-ticker__group"
                key={copy}
                aria-hidden={copy === 1}
              >
                {services.map((service) => (
                  <span
                    className="build-ticker__item"
                    key={service}
                  >
                    <span className="build-ticker__word">
                      {service}
                    </span>

                    <span
                      className="build-ticker__separator"
                      aria-hidden="true"
                    >
                      /
                    </span>
                  </span>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildTicker
