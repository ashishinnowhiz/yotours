import React from 'react'
import TextHoverCard from '../../components/Card/TextHoverCard'
import { Container, Row, Col } from 'reactstrap'
import WithUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'

const topThingsToDO = ({ data, lazyClassName, cityName, staticImg }) => {
  return isArray(data) ? (
    <section className='py-50'>
      <Container fluid={true}>
        <h2 className='mb-4'>Top 10 things to do in {cityName}</h2>
        <Row>
          {isArray(data) &&
            data.map((things, idx) => (
              <Col key={things.id} md='3' className='mb-4'>
                <TextHoverCard idx={idx+1} staticImg={staticImg} {...things} lazyClassName={lazyClassName} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  ) : null
}

export default WithUseIO(topThingsToDO)
