import React, { useState } from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import Swimmer from './components/Swimmer'
import Ocean from './components/Ocean'
import Beach from './components/Beach'

const config = {
  google: {
    families: ['Roboto:400,900'],
  },
}

const App = () => {
  const [isFontRendered, setIsFontRendered] = useState(false)

  const handleOnStatus = (status) => {
    if (status === 'active') setIsFontRendered(true)
  }

  return (
    <WebfontLoader
      config={ config }
      onStatus={ handleOnStatus }
    >
      <>
        <Swimmer />

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
