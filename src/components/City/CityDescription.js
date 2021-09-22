import React from 'react';
import ReactPlayer from "react-player";
import { Container, Row, Col, Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const cityDescription = props => {
  const { city } = props
  console.log(city)
  return (
    <section className="py-50 mt-5">
      <Container fluid={true}>
        <Row>
          <Col md="6">
            <h2>
              <FormattedMessage
                id="WELCOME"
                values={{ cityName: city && city.name }}
              />
            </h2>
            <p className="fs-18 text-text">
              {/* <FormattedMessage id="CITY_DESCRIPTION" /> */}
              {city && city.highlights}
            </p>
            <h4 className="fw-normal">
              <FormattedMessage id="IMPERIAL_ARCHITECTURE" />
            </h4>
            <p>
              <FormattedMessage id="IMPERIAL_ARCHITECTURE_DESC" />
              <NavLink className="text-primary" to="">
                <FormattedMessage id="READ_MORE" />
              </NavLink>
            </p>
          </Col>
          <Col md="6">
            <ReactPlayer
              url={city?.video_link}
              playing={false}
              width="100%"
              height="100%"
              controls
              className="resp-video-iframe"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default cityDescription;