import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SwimSprite from './swim_sprite.gif'
import SandSprite from './sand_sprite.gif'

const Swimmer = ({
  swimDirection,
  swimmerType,
}) => (
  <div className="swimmer">
    <img
      src={ swimmerType === 'water' ? SwimSprite : SandSprite }
      alt=""
      className={
        cx('swimmer__sprite', {
          'swimmer__sprite--up': swimDirection === 'up',
          'swimmer__sprite--hidden': swimmerType === 'hide',
          'swimmer__sprite--water': swimmerType === 'water',
          'swimmer__sprite--sand': swimmerType === 'sand',
        })
      }
    />
  </div>
)

Swimmer.propTypes = {
  swimDirection: PropTypes.string.isRequired,
  swimmerType: PropTypes.string.isRequired,
}

export default Swimmer
