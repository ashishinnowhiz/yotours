import React from "react"
import TestimonialCard1 from "../Card/TestimonialCard1"
import { Container, Col, Row, Button } from "reactstrap"
import Slider from "react-slick"
import { holidayPkg } from "../../config/CarouselSetting"

const testimonialCard = () => {
  return (
    <section className='py-50 bg-grey'>
      <Container fluid={true}>
        <Row>
          <Col md='6' className='mb-4 mb-md-0'>
            <h2 className='mb-4 text-white'>Meet our community members</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur.
            </p>
            <Button color='border'>Discover more &rarr;</Button>
          </Col>
          <Col md='6'>
            <Slider className='normal-slick-slider px-4' {...holidayPkg}>
              <TestimonialCard1 />
              <TestimonialCard1 />
              <TestimonialCard1 />
              <TestimonialCard1 />
              <TestimonialCard1 />
              <TestimonialCard1 />
              <TestimonialCard1 />
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default testimonialCard