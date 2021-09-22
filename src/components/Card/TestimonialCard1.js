import React from 'react'
import ShapeCircle from '../ShapeCircle/ShapeCircle'

class TestimonialCard1 extends React.Component {
  render() {
    return (
      <div className='testi-card1'>
        <div className="text-center">
          <ShapeCircle className="xl" />
          <h3 className="text-white mt-2 mb-0">Himawari Nohara</h3>
          <p>Tokyo, Japan</p>
        </div>
        <p className='testi-content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
    )
  }
}
export default TestimonialCard1
