import React from "react"
import { Button, UncontrolledCollapse, Col, Row } from "reactstrap"
import { isArray } from "../../helpers/Utils"
import { dayType } from '../../constant'

const Itinerary = ({ itinerary }) => {
  const days = itinerary && Object.keys(itinerary)
  return (
    <div className='collapse-con'>
      <Button color='nothing' id='toggler1'>
        Itenerary
      </Button>
      <UncontrolledCollapse toggler='#toggler1'>
        <div className='collapse-body'>
          <div className="tour-calendar">
            {isArray(days) &&
              days.map((day) => (
                <>
                  <div className="tour-row" key={day}>
                    <div className="tour-day">
                      Day {day}
                    </div>
                    <ul className="tour-scroll">
                      {isArray(itinerary[day]) && itinerary[day].map((details) => (
                        <li key={details.id}
                        // onClick=""
                        // className="active"
                        >
                          {details.day_type_image &&
                            <div className="tour-left-image" style={{ backgroundImage: `url(${details.day_type_image})` }}>
                            </div>
                          }
                          <div className={"tour-padding " + (details.day_type_image ? "tour-padding-more" : "")}>
                            <h5>{dayType[details.day_type]}</h5>
                            <p>{details.day_type_title}</p>
                            {/* <p>Activity: {details.activity}</p>
                        <p>price:  {details.price}</p>
                        <p>{details.day_type_description}</p> */}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="tour-dropdown show"> */}
                  <div className="tour-dropdown">
                    <Row>
                      <Col md="8">
                        <div>
                          <div className="d-inline-block mr-4">
                            <p className="m-0 text-text">Duration</p>
                            <p className="text-white">8hrs</p>
                          </div>
                          <div className="d-inline-block mr-4">
                            <p className="m-0 text-text">Activity Type</p>
                            <p className="text-white">Religius, Architecture</p>
                          </div>
                          <div className="d-inline-block mr-4">
                            <p className="m-0 text-text">Cost</p>
                            <p className="text-white">350/Adult</p>
                          </div>
                        </div>
                        <p className="m-0 text-text">Description</p>
                        <p className="text-white">Lorem Ipsum is simply dummy text</p>
                      </Col>
                      <Col md="4">
                        <img src="" alt="Images" className="img-fluid" />
                      </Col>
                    </Row>
                    <Button className="tour-dropdown-close">X</Button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </UncontrolledCollapse>
    </div>
  )
}

export default Itinerary
