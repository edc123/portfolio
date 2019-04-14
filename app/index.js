import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import Swimmer from './components/Swimmer'
import Ocean from './components/Ocean'
import Beach from './components/Beach'

const config = {
  google: {
    families: ['Roboto:400,900'],
  },
}

let currentScrollPos = 0
let nextScrollPos = 0

const App = () => {
  const [isFontRendered, setIsFontRendered] = useState(false)
  const [swimDirection, setSwimDirection] = useState('down')
  const [swimmerType, setSwimmerType] = useState('water')

  const updateSwimmer = () => {
    const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const beachTopPos = document.querySelector('.beach') ? document.querySelector('.beach').getBoundingClientRect().top : windowHeight
    const parasolTopPos = document.querySelector('.parasol') ? document.querySelector('.parasol').getBoundingClientRect().top : windowHeight
    const swimmerTopPos = (windowHeight / 2) - (175 / 2)
    const swimmerBottomPos = (windowHeight / 2) + (175 / 2)

    const swimmerInOcean = swimmerBottomPos < beachTopPos
    const swimmerOnBeach = swimmerBottomPos > beachTopPos
    const swimmerUnderParasol = swimmerTopPos > parasolTopPos

    if (swimmerInOcean) {
      setSwimmerType('water')
    } else if (swimmerUnderParasol) {
      setSwimmerType('hide')
    } else if (swimmerOnBeach) {
      setSwimmerType('sand')
    }

    nextScrollPos = window.pageYOffset

    if (currentScrollPos - nextScrollPos < 0) {
      setSwimDirection('down')
    } else if (currentScrollPos - nextScrollPos > 0) {
      setSwimDirection('up')
    }

    currentScrollPos = nextScrollPos
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(updateSwimmer, 100))
    window.addEventListener('scroll', updateSwimmer)
    return () => {
      window.removeEventListener('resize', debounce(updateSwimmer, 100))
      window.removeEventListener('scroll', updateSwimmer)
    }
  })

  const handleOnStatus = (status) => {
    if (status === 'active') setIsFontRendered(true)
  }

  return (
    <WebfontLoader
      config={ config }
      onStatus={ handleOnStatus }
    >
      <>
        <Swimmer
          swimDirection={ swimDirection }
          swimmerType={ swimmerType }
        />

        { isFontRendered && (
          <>
            <Ocean />
            <Beach />
          </>
        )}
      </>
    </WebfontLoader>
  )
}

export default App
