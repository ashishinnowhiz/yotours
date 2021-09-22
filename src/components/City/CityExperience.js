import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import { isArray } from "../../helpers/Utils";
import { FormattedMessage } from "react-intl";
import withUseIO from '../../HOC/WithUseIO'

const cityExperience = ({ data, lazyClassName, city, staticImg }) => {
  return isArray(data) ? (
    <section className="py-50">
      <Container fluid={true}>
        <h2 className="mb-4">
          <FormattedMessage
            id="city.TYPE_OF_EXPERIENCE"
            values={{ cityName: city && city.name }}
          />
        </h2>
        <Row>
          {data.map(({ category, featured_img }, index) => (
            <Col key={index} lg="2">
              <NavLink to="">
                <Card
                  body
                  className={`cityexperience-card ${lazyClassName} `}
                  data-src={featured_img || staticImg}
                  style={{
                    backgroundImage: `url(${staticImg})`,
                  }}
                >
                  <div className="bottom-text">
                    <h2>{category}</h2>
                  </div>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  ) : null;
};

export default withUseIO(cityExperience);
