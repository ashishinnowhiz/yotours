import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class CityInterestCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, theme } = this.props;
    return (
      <NavLink to="">
        <Card body className="cityinterest-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="bottom-text">
            <h2>{theme && theme.theme}</h2>
            <p>Night life <span>&#8226;</span> Drinking Spots <span>&#8226;</span> Street Food</p>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default CityInterestCard;
