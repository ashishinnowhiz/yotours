import React from "react"
import TextHoverCard from "../../components/Card/TextHoverCard"
import { Container, Row, Col } from "reactstrap"
import WithUseIO from "../../HOC/WithUseIO"
import { isArray } from "../../helpers/Utils"

const HighlightOfTour = ({ data, lazyClassName, cityName, staticImg }) => {
  return isArray(data) ? (
    <section className='py-50'>
      <Container fluid={true}>
        <h2 className='mb-4'>Highlights of the tour</h2>
        <Row>
          {isArray(data) &&
            data.map((things, idx) => (
              <Col key={idx} md='3' className='mb-4'>
                <TextHoverCard
                  idx={idx+1}
                  staticImg={staticImg}
                  lazyClassName={lazyClassName}
                  name={things.title}
                  feature_img_link={things.image}
                  description={things.description}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  ) : null
}

export default WithUseIO(HighlightOfTour)
