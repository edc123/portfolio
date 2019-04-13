import React, {
  useState,
  useRef,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TilingSprite,
  useApp,
  useTick,
} from '@inlet/react-pixi/dist/react-pixi.cjs'

const displacementTexture = PIXI.Texture.fromImage('https://res.cloudinary.com/cdn-data/image/upload/v1513024988/awzuINU_qrktxk.jpg')
displacementTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

const OceanText = ({
  text,
  style,
  anchor,
  x,
  y,
}) => {
  const displacementSprite = useRef(null)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    setFilters([new PIXI.filters.DisplacementFilter(displacementSprite.current)])
  })

  const pixiApp = useApp()
  pixiApp.renderer.plugins.interaction.autoPreventDefault = false
  pixiApp.renderer.view.style.touchAction = 'auto'

  const moveDisplacement = () => {
    displacementSprite.current.x -= 1
    displacementSprite.current.y -= 1
  }

  useTick(() => {
    moveDisplacement()
  })

  return (
    <>
      <TilingSprite
        ref={ displacementSprite }
        texture={ displacementTexture }
        width={ x }
        height={ y }
      />
      <Text
        style={ style }
        text={ text }
        anchor={ anchor }
        x={ x }
        y={ y }
        filters={ filters }
      />
    </>
  )
}

OceanText.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  anchor: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
}

OceanText.defaultProps = {
  text: '',
  style: {},
  anchor: {},
  x: 0,
  y: 0,
}

export default OceanText
