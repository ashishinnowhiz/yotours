import React from 'react'
import CityVlogCard from '../../components/Card/CityVlogCard'
import { Container, Row, Col } from 'reactstrap'
import { isArray } from '../../helpers/Utils'

const vblogs = ({ data, cityName }) => {
  return (
    isArray(data) ? 
      <section className='py-50'>
        <Container fluid={true}>
          <h2 className='mb-4'>Vlogs on {cityName}</h2>
          <Row>
            {isArray(data) &&
              data.map((vblog) => (
                <Col md='6' className='mb-4'>
                  <CityVlogCard vblog={vblog} cardclassName='light' />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    : null
  )
}

export default vblogs
