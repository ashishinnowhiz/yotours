import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Row, Col, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TripAdvisorImg from '../../images/tripadvisor.png';
class SearchResultCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-result-card">
        <Row>
          <Col md="3">
            <div className="result-img-container" style={{ backgroundImage: `url(${BannerImg})` }}>
              <Button color="border" className="line-height-32">View More Pics</Button>
            </div>
          </Col>
          <Col md="9">
            <div className="p-3">
              <Row>
                <Col md="6">
                  <h3 className="mb-0">Exotic Andaman <span className="fw-normal primary-font fs-14 text-text">4 Days - 5 Nights</span> <Button color="border-grey" className="line-height-32">Share</Button></h3>
                  <p className="mb-2"><i>(75 times booked)</i></p>
                  <p className="mb-2"><UncontrolledDropdown>
                    <DropdownToggle caret color='nothing' className="text-primary">
                      Rs. 3434/adult
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Rs. 3434/adult</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Rs. 3434/adult</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown></p>
                  <p className="mb-0"><b>Inclusions :</b></p>
                  <p>
                    <span>Flight</span>
                    <span>Hotel</span>
                    <span>Tours</span>
                    <span>Transfer</span>
                    <span>Sightseeing</span>
                    <span>Food</span>
                  </p>
                  <p className="mb-0"><img
                    className='img-fluid'
                    src={TripAdvisorImg}
                    alt=''
                  /> 3.5 stars</p>
                </Col>
                <Col md="6">
                  <p className="mb-0"><b>Itinerary Summary:</b></p>
                  <p><i>1 day havlock, 2 days neil island, 3 days port blair</i></p>
                  <p><i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</i></p>
                  <p className="text-right"><NavLink to="" className="text-primary">View full Itinerary &rarr;</NavLink></p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SearchResultCard;
