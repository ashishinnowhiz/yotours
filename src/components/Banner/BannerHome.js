import React from 'react';
import { Container, Button, FormGroup, Input, Label } from 'reactstrap';
import HomeCarousal from '../carousal/HomeCarousal';
import HomeBannerBottom from '../Menu/HomeBannerBottom';
class BannerHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={"home-banner " + className}>
        <HomeCarousal />
        <HomeBannerBottom />
        <Container fluid={true} className="banner-form-container">
          <div className="banner-form">
            <h2>Let's plan your next tour</h2>
            <FormGroup>
              <Label for="destination">Destination</Label>
              <Input type="text" name="destination" id="destination" placeholder="Enter where you are traveling to" />
            </FormGroup>
            <FormGroup>
              <Label for="travelers">Travelers</Label>
              <Input type="select" name="travelers" id="travelers">
                <option>Couple</option>
                <option>Solo</option>
                <option>Group</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="experience">Experience Type</Label>
              <Input type="select" name="experience" id="experience">
                <option>Walking Tour</option>
              </Input>
            </FormGroup>
            <Button color="primary" block>Explore experiences &rarr;</Button>
          </div>
        </Container>
      </div>
    )
  }
}
export default BannerHome