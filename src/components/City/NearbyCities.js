import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Container, Row, Col, Card } from "reactstrap"
import { isArray } from "../../helpers/Utils"
import withUseIO from "../../HOC/WithUseIO"

const NearbyCities = ({ data, lazyClassName, title, staticImg, redirect }) => {
  return isArray(data) ? (
    <section className='py-5 bg-grey'>
      <Container fluid={true}>
        <h2 className='mb-3 text-white'>{title}</h2>
        <Row>
          {data.map(({ id, name, banner_img_link, count }) => (
            <Col key={id} md='3' sm='6' className='mb-4'>
              <NavLink to={`/${redirect}/${id}`}>
                <Card
                  body
                  className={`city-card ${lazyClassName} `}
                  data-src={banner_img_link || staticImg}
                  style={{
                    backgroundImage: `url(${staticImg})`,
                  }}
                >
                  <div className='bottom-text'>
                    <h3>{name}</h3>
                    <p>{count} experiences &rarr;</p>
                  </div>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  ) : null
}

export default withUseIO(NearbyCities)
