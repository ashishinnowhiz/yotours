import React from 'react'
import { NavLink } from 'react-router-dom'

class ItineraryCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      className,
      lazyClassName,
      feature_img_link,
      staticImg,
      product_name,
      duration,
      pricing,
    } = this.props
    let daysNight = duration?.split(' ')
    return (
      <NavLink to='/product'>
        {className ? (
          <div className={'itinerary-card ' + className}>
            <div className='bottom-text'>
              <h2>
                View All
                <br />
                &rarr;
              </h2>
            </div>
          </div>
        ) : (
          <div
            className={'itinerary-card ' + lazyClassName}
            data-src={feature_img_link || staticImg}
            style={{
              backgroundImage: `url(${staticImg})`,
            }}
          >
            <div className='bottom-text'>
              <h5>{product_name}</h5>
              <p className='middle-details'>
                {daysNight?.[0]} Days - {daysNight?.[1]} Nights |{' '}
                <span>
                  {pricing?.[0]?.currency}{' '}
                  {pricing?.[0]?.adult_price}/
                  {pricing?.[0]?.pricing}
                </span>
              </p>
              <div className='bottom-details'>
                <p>View Itinerary &rarr;</p>
              </div>
            </div>
          </div>
        )}
      </NavLink>
    )
  }
}
export default ItineraryCard
