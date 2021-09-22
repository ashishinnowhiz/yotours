import React from 'react';
import ProfileImage from '../../images/profile.jpg';

class ShapeCircle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={"shape-circle " + className} style={{ backgroundImage: `url(${ProfileImage})` }}>
      </div>
    )
  }
}
export default ShapeCircle