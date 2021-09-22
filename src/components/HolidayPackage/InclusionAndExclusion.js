import React from 'react'
import { Button, UncontrolledCollapse } from 'reactstrap';

const InclusionAndExclusion = () => {
  return(
    <div className="collapse-con">
    <Button color="nothing" id="toggler5">
    Inclusions & Exclusions
        </Button>
    <UncontrolledCollapse toggler="#toggler5">
      <div className="collapse-body">
        <p>Lorem Ipsum</p>
      </div>
    </UncontrolledCollapse>
  </div>
  )
}

export default InclusionAndExclusion