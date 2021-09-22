import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap'
import LocationSVG from '../svg/location-svg'
import ReactPlayer from 'react-player'

class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { leftMenuclassName } = this.props
    return (
      <div className={'nav-left'}>
        <ul className={leftMenuclassName}>
          <li className='active'>
            <a href="#summary">
              Summary <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href="#highlight">
              Highlights of the tour <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#description'>
              Tour Description <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#itinerary'>
              Itinerary <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#exclusion'>
              Inclusions <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#exclusions'>
              Exclusions <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#cancellation'>
              Cancellation Policy <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#additional'>
              Additional Info <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <a href='#review'>
              Reviews <span className='arrow'>&#9654;</span>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9538477,77.3507442,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627'>
              Pick-up (Details)
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1592128948640!5m2!1sen!2sin'
                frameborder='0'
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
            </a>
          </li>
          <li>
            <a href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9538477,77.3507442,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627'>
              Drop-off (Details)
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1592128948640!5m2!1sen!2sin'
                frameborder='0'
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default LeftMenu
