import React, {
  useState,
  useEffect,
} from 'react'
import { debounce } from 'lodash'
import { Stage } from '@inlet/react-pixi/dist/react-pixi.cjs'

import OceanText from './OceanText'

const Ocean = () => {
  const [x, setX] = useState(window.innerWidth * 0.9)
  const y = window.innerHeight * 0.9

  useEffect(() => {
    const handleResize = () => setX(window.innerWidth * 0.9)
    window.addEventListener('resize', debounce(handleResize, 100))
    window.addEventListener('orientationchange', debounce(handleResize, 100))
    return () => {
      window.removeEventListener('resize', debounce(handleResize, 100))
      window.removeEventListener('orientationchange', debounce(handleResize, 100))
    }
  })

  const stageOptions = {
    autoResize: true,
    resolution: window.devicePixelRatio,
    transparent: true,
    roundPixels: true,
  }

  const oceanTextStyle = (fontSizeSetting) => {
    let fontSize
    let lineHeight

    if (fontSizeSetting === 'large') {
      fontSize = x <= 768 ? 60 : 0.12 * x
      lineHeight = x <= 768 ? 60 : 0.12 * x
    } else if (fontSizeSetting === 'medium') {
      fontSize = x <= 768 ? 40 : 0.06 * x
      lineHeight = x <= 768 ? 40 : 0.06 * x
    } else if (fontSizeSetting === 'small') {
      fontSize = x <= 768 ? 30 : 0.08 * x
      lineHeight = x <= 768 ? 30 : 0.08 * x
    }

    return {
      fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
      fontSize,
      lineHeight,
      fontWeight: '900',
      fill: '#ffffff',
      align: 'center',
      wordWrap: true,
      wordWrapWidth: x,
      padding: 50,
    }
  }

  const oceanContent = [
    {
      text: 'Making the web cool again.',
      style: oceanTextStyle('large'),
    },
    {
      text: 'I manage, develop and deliver innovative experiences that serve millions of people around the world.',
      style: oceanTextStyle('medium'),
    },
  ]

  return (
    <section className="ocean">
      <h1 className="title">Ed Cheng</h1>

      <Stage
        width={ x }
        height={ y * (oceanContent.length + 0.3) }
        options={ stageOptions }
      >
        { oceanContent.map((content, i) => (
          <OceanText
            key={ i }
            text={ content.text }
            style={ content.style }
            anchor={ {
              x: 0.5,
              y: 0.5,
            } }
            x={ x / 2 }
            y={ ((i * y - 1) + y / 2) }
          />
        ))}
      </Stage>
    </section>
  )
}

export default Ocean
