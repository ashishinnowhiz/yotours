import React from 'react'
import { Row, Col } from 'reactstrap'
import WithUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'
import ItineraryCard from '../../components/Card/ItineraryCard'

const TopRatedHoliday = ({ data, lazyClassName }) => {
  return (
    <section className='py-50'>
      <h2 className='mb-4'>Top-rated holidays</h2>
      <Row>
        {isArray(data) &&
          data.map((holiday, index) => (
            <Col key={holiday.id} md={index === 0 || index === 4 ? '6' : '3'} className='mb-3'>
              <ItineraryCard {...holiday} lazyClassName={lazyClassName} />
            </Col>
          ))}
        <Col md='3'>
          <ItineraryCard className='button-bg' />
        </Col>
      </Row>
    </section>
  )
}

export default WithUseIO(TopRatedHoliday)
