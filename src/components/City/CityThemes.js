/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import { isArray } from "../../helpers/Utils";
import withUseIO from '../../HOC/WithUseIO'

const cityExperience = ({ data, lazyClassName, city, staticImg }) => {
  return isArray(data) ? (
    <section className="py-50">
      <Container fluid={true}>
        <h2 className="mb-4">Experience Vienna for every interest</h2>
        {/* <Row>
          {data.map(({ theme, featured_img }, index) => (
            <Col key={index} lg="2">
              <NavLink to="">
                <Card
                  body
                  className={`cityinterest-card ${lazyClassName} `}
                  data-src={featured_img || staticImg}
                  style={{
                    backgroundImage: `url(${staticImg})`,
                  }}
                >
                  <div className="bottom-text">
                    <h2>{theme}</h2>
                    <p>
                      Night life <span>&#8226;</span> Drinking Spots{" "}
                      <span>&#8226;</span> Street Food
                    </p>
                  </div>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  ) : null;
};

export default withUseIO(cityExperience);
