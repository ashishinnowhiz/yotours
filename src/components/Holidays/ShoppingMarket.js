import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button } from 'reactstrap'
import ShoppingImg from '../../images/shopping.svg'
import { isArray } from '../../helpers/Utils'

const shoppingMarket = ({ shopping, cityName }) => {
  return isArray(shopping) ? (
    <section className='py-5'>
      <Container fluid={true}>
        <h2 className='mb-4'>Must visit shopping markets in {cityName}</h2>
        <Row>
          <Col md='5'>
            <img src={ShoppingImg} alt='' className='img-fluid' />
          </Col>
          <Col md='7'>
            <div className='border box-shadow p-4'>
              {isArray(shopping) &&
                shopping.map((shop) => (
                  <div key={shop.id} className='collapse-con'>
                    <Button color='nothing' id={`toggler${shop.id}`}>
                      {shop.name}
                    </Button>
                    <UncontrolledCollapse toggler={`#toggler${shop.id}`}>
                      <div className='collapse-body'>
                        <p>{shop.must_view}</p>
                        <p>{shop.stories}</p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

export default shoppingMarket
