import React from 'react'
import NotificationSVG from '../svg/notification-svg'
import CartSVG from '../svg/cart-svg'
import { NavLink } from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const MenuWithNav = (props) => {
  return (
    <>
      <li className="remove-resp">
        <UncontrolledDropdown>
          <DropdownToggle caret color='nothing'>
            Holidays
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/holiday">India</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="/holiday">Europe</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </li>
      <li className="remove-resp">
        <NavLink to='/experiences'>Live Experiences</NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/travel-services'>Travel Services</NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/'>B2B Services</NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/community'>Community</NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/storyteller'>Become a storyteller</NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/'>
          <span className="nav-txt">Notifications</span>
          <NotificationSVG />
        </NavLink>
      </li>
      <li className="remove-resp">
        <NavLink to='/my-cart'>
          <span className="nav-txt">My Cart</span>
          <CartSVG />
        </NavLink>
      </li>
    </>
  )
}

export default MenuWithNav
