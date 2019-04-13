import React from 'react'
import SwimSprite from './swim_sprite.gif'

const Swimmer = () => (
  <div className="swimmer">
    <img
      src={ SwimSprite }
      alt=""
      className="swimmer__sprite"
    />
  </div>
)

export default Swimmer
