import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'reactstrap'

const cityDescription = ({ city }) => {
  return (
    <section className='py-50 mt-5'>
      <Container fluid={true}>
        <h2>{city?.name} - A gift of the Himalayas to the world</h2>
        <Row>
          <Col md='6'>
            <p
              dangerouslySetInnerHTML={{
                __html: city?.summary,
              }}
            ></p>
          </Col>
          <Col md='6'>
            <ReactPlayer
              url={city?.video_link}
              playing={false}
              width='100%'
              height='100%'
              controls
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default cityDescription
