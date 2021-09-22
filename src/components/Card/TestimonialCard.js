import React from 'react'
import { Card } from 'reactstrap'
import ShapeName from '../ShapeCircle/ShapeName'
import { isArray } from '../../helpers/Utils'

class TestimonialCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { reviews } = this.props
    return isArray(reviews)
      ? reviews.map((review, idx) => (
          <Card key={idx} body className='testi-card'>
            <div className='testi-right'>
              <ShapeName
                customer_name={review.customer_name}
                location={review.location}
                customer_profile_img={review.customer_profile_img}
              />
            </div>
            <p className='testi-content'>{review.comment}</p>
          </Card>
        ))
      : null
  }
}
export default TestimonialCard
