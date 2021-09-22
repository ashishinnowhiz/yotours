import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button } from 'reactstrap'
import FoodImg from '../../images/food.png'
import { isArray } from '../../helpers/Utils'

const whereToEat = ({ foodDrinks, cityName }) => {
  return isArray(foodDrinks) ? (
    <section
      className='py-5 bg-food'
      style={{
        backgroundImage: `url(${FoodImg})`,
      }}
    >
      <Container fluid={true}>
        <h2 className='mb-4 text-white'>Where to eat in {cityName}</h2>
        <Row>
          <Col md='6'>
            {isArray(foodDrinks) &&
              foodDrinks.map((food) => (
                <div key={food.id} className='collapse-con collapse-con-white'>
                  <Button color='nothing' id={`toggler${food.id}`}>
                    {food.name}
                    <br />
                    <small>North Indian, Bar</small>
                  </Button>
                  <UncontrolledCollapse toggler={`#toggler${food.id}`}>
                    <div className='collapse-body'>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: food.description,
                        }}
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: food.must_view,
                        }}
                      />
                    </div>
                  </UncontrolledCollapse>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

export default whereToEat
