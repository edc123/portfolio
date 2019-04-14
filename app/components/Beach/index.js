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
      className="resume-link"
      tabIndex="0"
    >
      <img
        src={ resumeImg }
        alt="Check out my Resume"
        className="resume-link__icon"
      />
      {'View Ed\'s Resume'}
    </a>

    <a
      href="https://github.com/edc123/portfolio"
      className="github-link"
    >
      Inspect the code for this on Github
    </a>

  </div>
)

export default Beach
