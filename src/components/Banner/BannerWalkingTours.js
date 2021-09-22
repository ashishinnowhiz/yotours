import React from 'react';
import { Container, Button, Row, Col, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HolidayMenu from '../Menu/HolidayMenu';
import PayImage from '../../images/pay.svg';
import TentImage from '../../images/tent.svg';
import SupportImage from '../../images/support.svg';
import MedalImage from '../../images/medal.svg';
import WalkingToursMenu from '../Menu/WalkingToursMenu';
class BannerWalkingTours extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={"holiday-banner " + className}>
        <Container fluid={true}>
          <div className="pt-3">
            <WalkingToursMenu />
            <div className="nav-right">
              <div className="nav-right-padding">
                <h1 className="pt-5">Walking Tours</h1>
                <p>Come and experience more than 500 walking tours in 83 cities around the world</p>
                <div className="search-group">
                  <div className="search-input">
                    <Input type="text" placeholder="Destination"></Input>
                  </div>
                  <div className="search-input">
                    <Input type="text" placeholder="Duration"></Input>
                  </div>
                  <div className="search-dropdown">
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="nothing">
                        Travelers
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Travelers</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Travelers</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Travelers</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Travelers</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Travelers</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="search-btn">
                    <Button color="primary">Explore&nbsp;&nbsp; &rarr;</Button>
                  </div>
                </div>
                <Row>
                  <Col lg="3">
                    <div className="shape-bg">
                      <div className="shape-name">
                        <div className="shape-circle" style={{ backgroundImage: `url(${PayImage})` }}></div>
                        <div className="shape-text">
                          <p>Best Price<br />Guaranteed</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="shape-bg">
                      <div className="shape-name">
                        <div className="shape-circle" style={{ backgroundImage: `url(${TentImage})` }}></div>
                        <div className="shape-text">
                          <p>100% Experience<br />based Tours</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="shape-bg">
                      <div className="shape-name">
                        <div className="shape-circle" style={{ backgroundImage: `url(${SupportImage})` }}></div>
                        <div className="shape-text">
                          <p>24/7 Customer<br />Support</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="shape-bg">
                      <div className="shape-name">
                        <div className="shape-circle" style={{ backgroundImage: `url(${MedalImage})` }}></div>
                        <div className="shape-text">
                          <p>Top rated by<br />travellers</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </Container>
      </div >
    )
  }
}
export default BannerWalkingTours