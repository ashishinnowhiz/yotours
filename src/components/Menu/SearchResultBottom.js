import React from 'react';
import { Container, Button } from 'reactstrap';
import PayImage from '../../images/pay.svg';
import TentImage from '../../images/tent.svg';
import SupportImage from '../../images/support.svg';
import MedalImage from '../../images/medal.svg';

class SearchResultBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={"home-banner-bottom " + className}>
        <Container fluid={true}>
          <ul>
            <li><h4>Why Choose Us?</h4></li>
            <li>
              <div className="shape-name">
                <div className="shape-circle" style={{ backgroundImage: `url(${PayImage})` }}></div>
                <div className="shape-text">
                  <p>Best Price<br />Guaranteed</p>
                </div>
              </div>
            </li>
            <li>
              <div className="shape-name">
                <div className="shape-circle" style={{ backgroundImage: `url(${TentImage})` }}></div>
                <div className="shape-text">
                  <p>100% Experience<br />based Tours</p>
                </div>
              </div>
            </li>
            <li>
              <div className="shape-name">
                <div className="shape-circle" style={{ backgroundImage: `url(${SupportImage})` }}></div>
                <div className="shape-text">
                  <p>24/7 Customer<br />Support</p>
                </div>
              </div>
            </li>
            <li>
              <div className="shape-name">
                <div className="shape-circle" style={{ backgroundImage: `url(${MedalImage})` }}></div>
                <div className="shape-text">
                  <p>Top rated by<br />travellers</p>
                </div>
              </div>
            </li>
            <li>
              <Button color="primary">Customize your holiday &rarr;</Button>
            </li>
          </ul>
        </Container>
      </div>
    )
  }
}
export default SearchResultBottom