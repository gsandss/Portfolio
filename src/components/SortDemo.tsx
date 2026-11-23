import { useState } from 'react'
import Icon from './Icon'

const initial = [5, 2, 4, 1, 3]
type Frame = { values: number[]; pair: number[]; message: string }
function bubbleSortFrames(input: number[]): Frame[] {
  const values = [...input]
  const frames: Frame[] = [
    { values: [...values], pair: [], message: 'Start with five unsorted values.' },
  ]
  for (let end = values.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      const left = values[i]
      const right = values[i + 1]
      const swap = left > right
      if (swap) [values[i], values[i + 1]] = [right, left]
      frames.push({
        values: [...values],
        pair: [i, i + 1],
        message: swap
          ? `Swap ${left} and ${right} because ${left} is larger.`
          : `Keep ${left} and ${right} in order.`,
      })
    }
  }
  return frames
}
const frames = bubbleSortFrames(initial)

export default function SortDemo() {
  const [step, setStep] = useState(0)
  const frame = frames[step]
  const done = step === frames.length - 1
  return (
    <section className="demo" data-reveal aria-labelledby="demo-title">
      <p className="label">Interactive example</p>
      <h2 id="demo-title">Step through bubble sort</h2>
      <p>Compare neighboring values and move the larger one to the right.</p>
      <div className="demo-chart" aria-hidden="true">
        {frame.values.map((value, i) => (
          <div
            key={value}
            className={frame.pair.includes(i) ? 'compared' : ''}
            style={{ height: value * 17 + 12 + '%', left: i * 20 + '%' }}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="demo-status" aria-live="polite" aria-atomic="true">
        {frame.message} {done && 'The array is sorted.'}
        <span className="sr-only"> Current order: {frame.values.join(', ')}.</span>
      </p>
      <div className="demo-controls">
        <button className="button button--dark" onClick={() => setStep(done ? 0 : step + 1)}>
          <Icon name={done ? 'reset' : 'step'} />
          {done ? 'Run again' : 'Next comparison'}
        </button>
        <span className="label">
          {step} / {frames.length - 1}
        </span>
      </div>
    </section>
  )
}
