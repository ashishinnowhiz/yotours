import React from 'react'
import ProfileImage from '../../images/profile.jpg'
import { Container, Row, Col } from 'reactstrap'
import WithUseIO from '../../HOC/WithUseIO'
import { isArray } from '../../helpers/Utils'

const PackingEssential = ({ lazyClassName, data, cityName }) => {
  return isArray(data) ? (
    <section className='py-50'>
      <Container fluid={true}>
        <h2 className='mb-4'>Packing essentials for {cityName}</h2>
        <Row>
          {isArray(data) &&
            data.map((essentials) => (
              <Col key={essentials.id} md='6' className='mb-4'>
                <div className='shape-name xxl'>
                  <div
                    className={`shape-circle no-radius ${lazyClassName}`}
                    data-src={essentials.feature_img_link || ProfileImage}
                    style={{
                      backgroundImage: `url(${ProfileImage})`,
                    }}
                  ></div>
                  <div className='shape-text pt-2'>
                    <h3 className='pt-4'>{essentials.sub_category}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: essentials.description,
                      }}
                    />
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  ) : null
}

export default WithUseIO(PackingEssential)
