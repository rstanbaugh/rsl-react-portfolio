import React from 'react';
import richIcon from '../../assets/images/rich-cartoon.ico'
import retirementResume from '../../assets/images/retirement-resume.jpeg'


function Footer() {   
    return (
    <div className="footer" id="footer">
      <hr></hr>
      <a href="https://github.com/rstanbaugh"><img src={ richIcon } alt="Github" class="icon" width="48" /></a>
      <a href="https://www.linkedin.com/in/stanbaugh/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="icon"/></a>
      <p>
      Rich stanbaugh  |  <a href={ retirementResume } class="link">download resume</a> |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
      </p>
    </div>
    )
}

export default Footer;