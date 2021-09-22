import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import LocationSVG from '../svg/location-svg';
import ReactPlayer from 'react-player';

class WalkingToursMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { leftMenuclassName } = this.props;
    return (
      <div className={"nav-left"}>
        <ul className={leftMenuclassName}>
          <li className="active"><NavLink to="">Local Experience <span className="arrow">&#9654;</span></NavLink></li>
          <li><NavLink to="">Walking Tours <span className="arrow">&#9654;</span></NavLink></li>
          <li><NavLink to="">Sightseeing Tours <span className="arrow">&#9654;</span></NavLink></li>
          <li><NavLink to="">Day Trips <span className="arrow">&#9654;</span></NavLink></li>
          <li><NavLink to="">Activities <span className="arrow">&#9654;</span></NavLink></li>
          <li><NavLink to="">Attraction Tickets <span className="arrow">&#9654;</span></NavLink></li>
          <li><hr /></li>
          <li>&nbsp;</li>
          <li>
            <NavLink to="" className="btn btn-orange"><b>Become a community member</b><br />and avail additional discounts on tour <span style={{ whiteSpace: "nowrap" }}>prices &rarr;</span></NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default WalkingToursMenu