import React from 'react'
import ProductCard from '../Card/ProductCard'
import { Container, Row, Col } from 'reactstrap'
import { isArray } from '../../helpers/Utils'
import withUseIO from '../../HOC/WithUseIO'

const experience = ({ data, lazyClassName, heading }) => {
  return (
    isArray(data) ? 
      <section className='py-50'>
        <Container fluid={true}>
          <h2 className='mb-4'>{heading}</h2>
          {isArray(data) &&
            data.map((product) => (
              <Row key={product.id}>
                <Col md='3' className='mb-4'>
                  <ProductCard
                    product={product}
                    lazyClassName={lazyClassName}
                    className='no-margin'
                    productclassName='product-card2'
                  />
                </Col>
              </Row>
            ))}
          <Row>
            <Col md='3' className='mb-4'>
              <ProductCard
                className='no-margin'
                productclassName='product-card2'
                productbutton={true}
              />
            </Col>
          </Row>
        </Container>
      </section>
    : null
  )
}

export default withUseIO(experience)
