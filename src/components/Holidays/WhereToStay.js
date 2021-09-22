import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import HotelCard from '../../components/Card/HotelCard'
import withUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'

const whereToStay = ({ data, lazyClassName, cityName }) => {
  const remainData = isArray(data) && data.slice(1)
  const hotels = isArray(remainData) && remainData.slice(0, 3)
  return (
    <section className='py-5'>
      {isArray(data) && (
        <Container fluid={true}>
          <h2 className='mb-4'>Where to stay in {cityName}</h2>
          <Row>
            <Col md='6'>
              <HotelCard {...data[0]} className='lg' lazyClassName={lazyClassName}/>
            </Col>
            <Col md='6'>
              <Row>
                {isArray(hotels) &&
                  hotels.map((hotel) => (
                    <Col key={hotel.id} md='6' className='mb-4'>
                      <HotelCard {...hotel} lazyClassName={lazyClassName} />
                    </Col>
                  ))}
                {/* <Col md='6' className='mb-4'><HotelCard /></Col>
            <Col md='6'><HotelCard /></Col> */}
                <Col md='6'>
                  <HotelCard fullButton={true} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </section>
  )
}

export default withUseIO(whereToStay)
