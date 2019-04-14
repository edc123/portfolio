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
import displacementMap from './displacement_map.png'

const displacementTexture = PIXI.Texture.fromImage(displacementMap)
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
  const [isDisplacementVisible, setIsDisplacementVisible] = useState(false)

  useEffect(() => {
    setFilters([new PIXI.filters.DisplacementFilter(displacementSprite.current)])
    setIsDisplacementVisible(true)
  })

  const pixiApp = useApp()
  pixiApp.renderer.plugins.interaction.autoPreventDefault = false
  pixiApp.renderer.view.style.touchAction = 'auto'

  const moveDisplacement = () => {
    displacementSprite.current.x -= 2
    displacementSprite.current.y -= 2
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
        visible={ isDisplacementVisible }
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
