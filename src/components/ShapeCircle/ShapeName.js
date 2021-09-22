import React from 'react';
import ProfileImage from '../../images/profile.jpg';

class ShapeName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { customer_name, location, customer_profile_img } = this.props
    return (
      <div className="shape-name">
        <div className="shape-circle" style={{ backgroundImage: `url(${customer_profile_img || ProfileImage})` }}></div>
        <div className="shape-text">
          <h3>{customer_name}</h3>
          <p>{location}</p>
        </div>
      </div>
    )
  }
}
export default ShapeName