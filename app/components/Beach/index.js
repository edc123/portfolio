import React from 'react'
import parasolImg from './parasol.png'
import resumeImg from './resume.png'

const Beach = () => (
  <div className="beach">
    <img
      src={ parasolImg }
      alt=""
      className="parasol"
    />

    <a
      href="http://eddy.land/ed_cheng_resume.pdf"
      className="resume"
      tabIndex="0"
    >
      <img
        src={ resumeImg }
        alt="Check out my Resume"
        className="resume__icon"
      />
      <h2>{'View Ed\'s Resume'}</h2>
    </a>

  </div>
)

export default Beach
