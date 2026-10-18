import styles from './CompleteCode.module.scss'
import { useState, useContext } from 'react'
import { PaletteContext } from '@/context/PaletteContext'
import { SettingsGradientContext } from '@/context/SettingsGradientContext'

const CompleteCode = () => {
  const [activeButton, setActiveButton] = useState('CSS')
  const [isCopied, setIsCopied] = useState(false)

  const { stops } = useContext(PaletteContext)
  const { gradientMode, angle, shape } = useContext(SettingsGradientContext)

  const buttons = ['CSS', 'Tailwind', 'SCSS', 'SVG']

  const generateCode = () => {
    if (!stops || stops.length === 0) return ''

    const stopsStr = stops.map(s => `${s.color} ${s.position}%`).join(', ')

    let gradient = ''
    if (gradientMode === 'Linear') gradient = `linear-gradient(${angle}deg, ${stopsStr})`
    if (gradientMode === 'Radial') gradient = `radial-gradient(${shape} at center, ${stopsStr})`
    if (gradientMode === 'Conic') gradient = `conic-gradient(from ${angle}deg, ${stopsStr})`

    switch (activeButton) {
      case 'CSS':
        return `background: ${gradient};`
      case 'Tailwind':
        return `bg-[${gradient.replace(/ /g, '_')}]`
      case 'SCSS':
        return `$gradient: ${gradient};\nbackground: $gradient;`
      case 'SVG':
        const svgStops = stops.map(s => `<stop offset="${s.position}%" stop-color="${s.color}" />`).join('\n      ')
        return `<svg width="100%" height="100%">\n  <defs>\n    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">\n      ${svgStops}\n    </linearGradient>\n  </defs>\n  <rect width="100%" height="100%" fill="url(#grad)" />\n</svg>`
      default:
        return `background: ${gradient};`
    }
  }

  const codeString = generateCode()

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const subtitle = activeButton === 'CSS'
    ? 'CSS3'
    : activeButton.toUpperCase()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <div className={styles.buttons}>
            {buttons.map((item) => (
              <button
                key={item}
                className={`${styles.button} ${activeButton === item ? styles.active : ''}`}
                onClick={() => setActiveButton(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className={styles.text}>{subtitle}</p>
        </div>
        <div className={styles.codeContainer}>
          <pre className={styles.pre}>
            <code className={styles.code}>{codeString}</code>
          </pre>
          <button className={styles.copyButton} onClick={handleCopy}>
            <img
              src="/Gradients/images/copy.svg"
              alt=""
              width="18"
              height="22"
              loading="lazy"
            />
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteCode