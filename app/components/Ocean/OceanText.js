import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TilingSprite,
} from '@inlet/react-pixi/dist/react-pixi.cjs'

const displacementTexture = PIXI.Texture.fromImage('https://res.cloudinary.com/cdn-data/image/upload/v1513024988/awzuINU_qrktxk.jpg')
displacementTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

class OceanText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
    }

    this.displacementSprite = React.createRef()
  }

  componentDidMount() {
    this.setState({
      filters: [
        new PIXI.filters.DisplacementFilter(this.displacementSprite.current),
      ],
    })

    PIXI.ticker.shared.add(this.move, this)
  }

  componentWillUnmount() {
    PIXI.ticker.shared.remove(this.move, this)
  }

  move() {
    this.displacementSprite.current.x -= 1
    this.displacementSprite.current.y -= 1
  }

  render() {
    const {
      text,
      style,
      anchor,
      x,
      y,
    } = this.props

    const {
      filters,
    } = this.state

    return (
      <>
        <TilingSprite
          ref={ this.displacementSprite }
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
}

// const pixiApp = useApp()
// pixiApp.renderer.plugins.interaction.autoPreventDefault = false
// pixiApp.renderer.view.style.touchAction = 'auto'

// useTick(() => moveDisplacement())

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
