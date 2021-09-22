import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../../images/banner1.jpg'
import { Card } from 'reactstrap'

class HolidayCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { lazyClassName, staticImg, featured_img, name } = this.props
    return (
      <NavLink to=''>
        <Card
          body
          className={'holiday-card ' + lazyClassName}
          data-src={featured_img || staticImg}
          style={{
            backgroundImage: `url(${staticImg})`,
          }}
          style={{ backgroundImage: `url(${BannerImg})` }}
        >
          <div className='bottom-text'>
            {/* <p>Recreation with</p> */}
            <h2>{name}</h2>
          </div>
        </Card>
      </NavLink>
    )
  }
}
export default HolidayCard
