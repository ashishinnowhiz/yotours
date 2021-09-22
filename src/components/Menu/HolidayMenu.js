import React from 'react'
import { NavLink } from 'react-router-dom'
import { isArray } from '../../helpers/Utils'
class HolidayMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { leftMenuclassName, city, regions } = this.props
    return (
      <div className='nav-left'>
        <ul className={leftMenuclassName}>
          {isArray(city) &&
            city.map((city, idx) =>
              idx === 0 ? (
                <li key={city.id} className='active'>
                  <NavLink to=''>
                    {city.state} <span className='arrow'>&#9654;</span>
                  </NavLink>
                </li>
              ) : (
                <li key={city.id}>
            <NavLink to={`/${city.id}`}>
            {city.state} <span className='arrow'>&#9654;</span>
            </NavLink>
          </li>
              )
            )}
          <li>
            <hr />
          </li>
          {isArray(regions) &&
            regions.map((region, idx) => (
              <li key={idx}>
                <NavLink to=''>
                  {region}
                  <span className='arrow'>&#9654;</span>
                </NavLink>
              </li>
            ))}
          <li>
            <NavLink to='' className='btn btn-orange'>
              <b>Become a community member</b>
              <br />
              and avail additional discounts on tour{' '}
              <span style={{ whiteSpace: 'nowrap' }}>prices &rarr;</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default HolidayMenu
