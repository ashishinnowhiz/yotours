import React from 'react';
import { NavLink } from 'react-router-dom';

class MyAccountMenu extends React.Component {
  render() {
    return (
      <ul className="admin-menu">
        <li><NavLink to="/my-profile">My Profile</NavLink></li>
        <li><NavLink to="/booking-history">Booking History</NavLink></li>
        <li><NavLink to="/saved-payment-methods">Saved payment methods</NavLink></li>
        <li><NavLink to="/yo-credits">You Tour Credit</NavLink></li>
        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
      </ul>
    )
  }
}

export default MyAccountMenu
