import React from "react"
import { Button, UncontrolledCollapse } from "reactstrap"
import { isArray } from "../../helpers/Utils"
const InclusionAndExclusion = ({ pickups, dropoff }) => {
  return (
    <div className='collapse-con'>
      <Button color='nothing' id='toggler4'>
        Getting there
      </Button>
      <UncontrolledCollapse toggler='#toggler4'>
        <div className='collapse-body'>
          {isArray(pickups) &&
            pickups.map((pick, idx) => (
              <div key={idx} style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                  <h4>Pick-up</h4>
                  <p>day: {pick.days}</p>
                  <p>{pick.location}</p>
                  <p>Pickup Time: {pick.pickup_time}</p>
                </div>
                <div>
                  <h4>Drop-off</h4>
                  <p>{dropoff[idx]["location"]}</p>
                  <p>drop Time: {dropoff[idx]["dropoff_time"]}</p>
                </div>
              </div>
            ))}
        </div>
      </UncontrolledCollapse>
    </div>
  )
}

export default InclusionAndExclusion
