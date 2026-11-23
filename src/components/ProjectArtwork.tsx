import debuggerScreenshot from '../assets/code-debugger.webp'

const sortingSteps = [
  [5, 2, 4, 1, 3],
  [2, 5, 4, 1, 3],
  [2, 4, 5, 1, 3],
]

export default function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === 'ai-code-debugger') {
    return (
      <div className="art art--debug">
        <img
          src={debuggerScreenshot}
          width="1496"
          height="745"
          loading="lazy"
          alt="The debugger’s code editor and local AI question panel."
        />
      </div>
    )
  }
  return (
    <div className="art art--sort" aria-hidden="true">
      <div className="sort-proof">
        <div className="sort-proof__heading">
          Bubble sort <span>Pass 1</span>
        </div>
        {sortingSteps.map((values, step) => (
          <div className="sort-proof__line" key={step}>
            {values.map((value) => (
              <span className={value === 5 ? 'moving' : ''} key={value}>
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
