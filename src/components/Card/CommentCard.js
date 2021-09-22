import React from "react";
import { Card, Row, Col } from 'reactstrap';
import ShapeName from "../ShapeCircle/ShapeName";
import { NavLink } from "react-router-dom";

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card body className="comments-card">
        <Row>
          <Col lg="7">
            <Row>
              <Col lg="6">
                <ShapeName />
              </Col>
              <Col lg="6">
                <p className="mb-0">Date: <span className="text-grey">17 Oct, 2020</span></p>
                <p className="mb-0">Travalers: <span className="text-grey">Family with kids</span></p>
              </Col>
            </Row>
            <p className="mt-4 mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores...<NavLink to="" className="text-primary">Read more</NavLink></p>
          </Col>
          <Col lg="5">
            <p className="text-label">Average Rating</p>
            <h4>4.5 - Awesome</h4>
          </Col>
        </Row>
      </Card>
    );
  }
}
export default CommentCard;
