import React from 'react'
import HolidayCard from '../../components/Card/HolidayCard'
import { Row, Col } from 'reactstrap'
import WithUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'

const holidayLookingFor = ({data}) => {
  return(
    <section className='py-50 mt-5'>
    <h2 className='mb-4'>
      What type of holiday are you looking for ?
    </h2>
    <Row>
      {isArray(data) && data.map(theme=>
        <Col key={theme.id} md='2'>
          <HolidayCard {...theme} featured_img={theme.image}/>
        </Col>
      )}
    </Row>
  </section>
  )
}

export default WithUseIO(holidayLookingFor)