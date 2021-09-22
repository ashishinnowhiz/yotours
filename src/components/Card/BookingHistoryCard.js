import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from '../../images/profile.jpg';
import { Button, Row, Col } from 'reactstrap';

class BookingHistoryCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="shape-name xxl my-cart">
        <div className="shape-circle no-radius" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
        <div className="shape-text">
          <Row>
            <Col sm="6" md="4">
              <h3 className="my-2">Best of Dutch Street Food</h3>
              <p className="mb-2">Dates : <span className="text-grey">15 Oct - 20 Oct</span></p>
              <p className="mb-2">Time Slot : <span className="text-grey">8.30 AM</span></p>
              <p className="mb-2">Language : <span className="text-grey">English</span></p>
            </Col>
            <Col sm="6" md="4">
              <h3 className="my-2 d-none d-sm-block">&nbsp;</h3>
              <p className="mb-2">Adult : <span className="text-grey mr-3">4</span> Youth : <span className="text-grey mr-3">4</span> Infant : <span className="text-grey">4</span></p>
              <p className="mb-2">Experience type : <span className="text-grey">beer tasting</span></p>
              <p className="mb-2">Request : <NavLink to="" className="text-primary">Add Special Request</NavLink></p>
            </Col>
            <Col sm="12" md="4" className="text-md-right">
              <h3 className="my-2"><span className="text-text">Amount : </span> $ 180.00</h3>
              <p><Button color="border-grey" className="ml-md-3 mr-3 mr-md-0 mb-2 line-height-32">Modify</Button>
              <Button color="border" className="mb-2 ml-md-3 mr-3 mr-md-0 line-height-32">Remove</Button></p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default BookingHistoryCard;
