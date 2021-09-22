import React from "react"
import { Button, UncontrolledCollapse } from "reactstrap"
import { isArray } from "../../helpers/Utils"

const staticImg =
      'https://image.shutterstock.com/image-vector/dishes-icon-set-260nw-146492768.jpg'
const FoodAndAccommodation = ({ foods }) => {
  return (
    <div className='collapse-con'>
      <Button color='nothing' id='toggler3'>
        Food & Accommodation
      </Button>
      <UncontrolledCollapse toggler='#toggler3'>
        <div className='collapse-body'>
          {isArray(foods) &&
            foods.map((food, idx) => {
              let foodType = food.type
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <h4>Day {food.day}</h4>
                  <img src={staticImg} />
                  <p>{food.title}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        (foodType.includes("breakfast")
                          ? "&#9989;"
                          : "&#10060;") + " Breakfast",
                    }}
                  />

                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        (foodType.includes("lunch") ? "&#9989;" : "&#10060;") +
                        " Lunch",
                    }}
                  />

                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        (foodType.includes("dinner")
                          ? "&#9989;"
                          : "&#10060;") + " Dinner",
                    }}
                  />
                </div>
              )
            })}
        </div>
      </UncontrolledCollapse>
    </div>
  )
}

export default FoodAndAccommodation
