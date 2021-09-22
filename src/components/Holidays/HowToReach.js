import React from 'react'
import { Container, Row, Col, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import TrainImg from '../../images/subway.svg'
import ExternalLinkImg from '../../images/external-link.svg'
import FlightImg from '../../images/airplane.svg'
import { isArray } from '../../helpers/Utils'

const howToReach = ({ reach, cityName }) => {
  return isArray(reach) ? (
    <section className='py-5'>
      <Container fluid={true}>
        <h2 className='mb-4'>How to reach {cityName}</h2>
        {/* <Row>
              <Col md='6'>
                <div className='shape-name'>
                  <div className='shape-circle img'>
                    <img src={TrainImg} alt='' />
                  </div>
                  <div className='shape-text'>
                    <p>Nearest Railway station</p>
                    <h3>Joginder Nagar (JDNX) <span className='text-text'>- 50km</span> <NavLink to='' className='text-primary'><img src={ExternalLinkImg} className='mt--3px' alt='' /></NavLink></h3>
                  </div>
                </div>
              </Col>
              <Col md='6'>
                <div className='shape-name'>
                  <div className='shape-circle img'>
                    <img src={FlightImg} alt='' />
                  </div>
                  <div className='shape-text'>
                    <p>Nearest Airport</p>
                    <h3>Kullu–Manali Airport (IATA: KUU, ICAO: VIBR), Bhuntar <span className='text-text'>- 50km</span> <NavLink to='' className='text-primary'><img src={ExternalLinkImg} className='mt--3px' alt='' /></NavLink></h3>
                  </div>
                </div>
              </Col>
            </Row> */}
        <ul className='dot-grey mt-4'>
          {isArray(reach) &&
            reach.map((data) => (
              <li data={data.id}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                />
              </li>
            ))}
        </ul>
        <div className='mt-4'>
          <p className='text-grey mb-1 fw-bold'>Search for directions from</p>
          <div className='search-group'>
            <div className='search-input'>
              <Input type='text' placeholder='Enter starting location'></Input>
            </div>
            <div className='search-btn'>
              <Button color='primary'>Search&nbsp&nbsp &rarr</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  ) : null
}

export default howToReach
