import React from 'react';
import { Card } from 'reactstrap';

class SocialMediaCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { productClass } = this.props;
    return (
      <div className="socialmedia-card">
        <div style={{ backgroundImage: "url(/images/banner1.jpg)" }}></div>
      </div>
    )
  }
}
export default SocialMediaCard