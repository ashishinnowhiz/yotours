import React from 'react'
import { Button, UncontrolledCollapse } from 'reactstrap';

const Reviews = () => {
  return(
    <div className="collapse-con">
    <Button color="nothing" id="toggler7">
    Reviews
        </Button>
    <UncontrolledCollapse toggler="#toggler7">
      <div className="collapse-body">
        <p>Lorem Ipsum</p>
      </div>
    </UncontrolledCollapse>
  </div>
  )
}

export default Reviews