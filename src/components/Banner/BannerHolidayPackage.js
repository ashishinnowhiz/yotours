import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Button } from 'reactstrap'
import CloudyImage from '../../images/cloudy-day.svg'
import SunnyImage from '../../images/sunny-day.svg'
import BannerImg from '../../images/banner1.jpg'
import moment from 'moment'
class BannerHolidayPlace extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      className,
      product_name,
      holiday_country,
      times_booked,
      duration,
      pickups,
      peak_season,
      pricing,
      featured_img,
      city
    } = this.props
    let seasons = peak_season && peak_season.split(' - ')
    const dayNight = duration && duration.split(' ')
    const startMonth = seasons?.length && moment(new Date(seasons[0])).format('MMM')
    const endMonth = seasons?.length && moment(new Date(seasons[1])).format('MMM')
    const cities = city && city.map((city)=>city.name)
    return (
      <div
        className={'banner-holiday-place ' + className}
        style={{ backgroundImage: `url(${featured_img})` }}
      >
        <Container fluid={true}>
          <div className='breadcrumb'>
            <Button color='nothing'>&larr;</Button>
            <ul>
              <li>
                <NavLink to='/'>Holidays ({holiday_country})</NavLink>
              </li>
              <li>&gt;</li>
              <li>{product_name}</li>
            </ul>
          </div>
          <div className='banner-text'>
            <h1 className='banner-heading'>{product_name}</h1>
            <p>{times_booked} times booked</p>
            <ul className='banner-ul'>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${CloudyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>DURATION</p>
                  <h3>{`${dayNight && dayNight[0]} Days - ${dayNight && dayNight[1]} Nights`}</h3>
                </div>
              </li>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>MEETING POINT</p>
                  <h3>{pickups?.location}</h3>
                </div>
              </li>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>PLACES COVERED</p>
                  <h3>{cities && cities.join(', ')}</h3>
                </div>
              </li>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>PEAK SEASON</p>
                  <h3>{`${startMonth?.toUpperCase()} - ${endMonth?.toUpperCase()}`}</h3>
                </div>
              </li>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>GROUP SIZE</p>
                  <h3>Minimum {pricing?.minimum_person}</h3>
                </div>
              </li>
              <li className='shape-name'>
                <div
                  className='shape-circle image'
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className='shape-text'>
                  <p>ROUTE OVERVIEW</p>
                  <p>
                    <NavLink className='text-primary' to=''>
                      Click here to see
                    </NavLink>
                  </p>
                </div>
              </li>
            </ul>
            <div className='mt-3'>
              <Button color='border'>Download Itinerary</Button>
              <Button color='border'>Share this page</Button>
              <Button color='border'>Gift a friend</Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default BannerHolidayPlace
