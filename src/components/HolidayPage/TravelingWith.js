import React from 'react'
import { Row, Col } from 'reactstrap'
import WithUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'
import CityExperienceCard from '../../components/Card/CityExperienceCard'

const TravelingWith = ({ data, lazyClassName , title, staticImg, isGreater}) => {
  return (
    <section className='py-50'>
      <h2 className='mb-4'>{title}</h2>
      <Row>
        {isArray(data) &&
          data.map((travel, index) => (
            <Col key={travel.id || index} md='3'>
              <CityExperienceCard {...travel} staticImg={staticImg} lazyClassName={lazyClassName} />
            </Col>
          ))}
          {isGreater && <Col md='3'>
              <CityExperienceCard className='button-bg' />
            </Col>}
      </Row>
    </section>
  )
}

export default WithUseIO(TravelingWith)
