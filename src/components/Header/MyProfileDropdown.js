import React from 'react'
import UserSVG from '../svg/user-svg'
import CardSVG from '../svg/card-svg'
import DollarSVG from '../svg/dollar-svg'
import HeartSVG from '../svg/heart-svg'
import SignoutSVG from '../svg/signout-svg'
import ShapeCircle from '../ShapeCircle/ShapeCircle'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const myProfileDropdown = (props) => {
  return (
    <li>
      <UncontrolledDropdown>
        <DropdownToggle caret color='nothing'>
          <ShapeCircle />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a" href="/my-profile">
            <span className='svg-width'>
              <UserSVG />
            </span>{' '}
            My Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/booking-history">
            <span className='svg-width'>
              <UserSVG />
            </span>{' '}
            Booking History
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/saved-payment-methods">
            <span className='svg-width'>
              <CardSVG />
            </span>{' '}
            Saved Payment methods
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/yo-credits">
            <span className='svg-width'>
              <DollarSVG />
            </span>{' '}
            Yo Tour Credit
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/wishlist">
            <span className='svg-width'>
              <HeartSVG />
            </span>{' '}
            Wishlist
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/signup">
            <span className='svg-width'>
              <SignoutSVG />
            </span>{' '}
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </li>
  )
}

export default myProfileDropdown