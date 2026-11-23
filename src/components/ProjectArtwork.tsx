import Icon from './Icon'

const heights = [30, 51, 39, 68, 54, 84, 65, 94, 73, 47, 61, 36]

export default function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === 'ai-code-debugger')
    return (
      <div className="art art--debug" aria-hidden="true">
        <div className="editor-art">
          <div className="editor-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>debug.py</span>
            <Icon name="code" />
          </div>
          <div className="code-sample">
            <div>
              <span>01</span>
              <b>def</b> average(values):
            </div>
            <div>
              <span>02</span>
              <b className="indent">return</b> sum(values) / len(values)
            </div>
            <div>
              <span>03</span>
            </div>
            <div>
              <span>04</span>average(<em>[]</em>)
            </div>
          </div>
          <div className="traceback">
            <i>!</i> ZeroDivisionError
          </div>
        </div>
      </div>
    )
  return (
    <div className="art art--sort" aria-hidden="true">
      <div className="sort-art">
        <div className="sort-art__title">
          <span>sorting.js</span>
          <Icon name="layers" />
        </div>
        <div className="sort-bars">
          {heights.map((height, index) => (
            <i
              key={height}
              className={index === 4 || index === 5 ? 'highlight' : ''}
              style={{ height: height + '%' }}
            />
          ))}
        </div>
        <div className="sort-baseline">
          <span>ARRAY</span>
          <span>[ 12 ]</span>
        </div>
      </div>
    </div>
  )
}
