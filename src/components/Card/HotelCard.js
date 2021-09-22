import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class HotelCard extends React.Component {
  render() {
    const {
      className,
      fullButton,
      featured_img,
      staticImg,
      lazyClassName,
      price,
      location,
      description,
      name,
    } = this.props
    return (
      <>
        {fullButton && fullButton === true ? (
          <Button color='primary' className='hotel-card'>
            View All
            <br />
            &rarr;
          </Button>
        ) : (
          <NavLink to='/'>
            <div
              className={'hotel-card ' + className + lazyClassName}
              data-src={featured_img || staticImg}
              style={{
                backgroundImage: `url(${staticImg})`,
              }}
            >
              <div className='bottom-text'>
                <h2>{name}</h2>
                <p className='middle-details'>
                  <span>Rs {price}</span>
                  {/* <span>$ {price}/night</span> | 3.5 stars */}
                </p>
                <div className='bottom-details'>
                  {/* <p>
                    {location}
                  </p> */}
                  {/* <p>
                    <span className='mr-2'>
                      <i className='yes'>&#10003;</i> Wifi
                    </span>
                    <span className='mr-2'>
                      <i className='no'>&#x2715;</i> Breakfast
                    </span>
                  </p> */}
                  <p>Book Now &rarr;</p>
                </div>
              </div>
            </div>
          </NavLink>
        )}
      </>
    )
  }
}
export default HotelCard
