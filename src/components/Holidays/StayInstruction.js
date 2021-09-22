import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import StaySafeImg from '../../images/stay-safe.svg'
import { NavLink } from 'react-router-dom'
import { isArray } from '../../helpers/Utils'

const stayInstruction = ({ scams }) => {
  return isArray(scams) ? (
    <section className='py-5 bg-danger'>
      <Container fluid={true}>
        <h2 className='mb-4 text-center text-white'>
          Staying safe - Scams to avoid
        </h2>
        <Row>
          <Col md='6'>
            <ol className='ol-num ol-color-white'>
              {isArray(scams) &&
                scams.map((scam) => (
                  <li key={scam.id}>
                    <h3 className='fw-normal'>{scam.sub_category}</h3>
                    <p>
                      {scam.description}
                      {/* <NavLink className='text-primary' to=''>
                        Read more
                      </NavLink> */}
                    </p>
                  </li>
                ))}
            </ol>
          </Col>
          <Col md='6'>
            <img src={StaySafeImg} alt='' className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}
export default stayInstruction
