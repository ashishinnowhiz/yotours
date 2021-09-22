import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DemoPages extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/signup" target="_blank">
            Sign up
          </Link>
        </div>
        <div>
          <Link to="/my-profile" target="_blank">
            My profile
          </Link>
        </div>
        <div>
          <Link to="/yo-credits" target="_blank">
            Yo Credits
          </Link>
        </div>
        <div>
          <Link to="/wishlist" target="_blank">
            Wishlist
          </Link>
        </div>
        <div>
          <Link to="/booking-history" target="_blank">
            Booking History
          </Link>
        </div>
        <div>
          <Link to="/saved-payment-methods" target="_blank">
            Saved Payment Methods
          </Link>
        </div>
        <div>
          <Link to="/contact-us" target="_blank">
            Contact Us
          </Link>
        </div>
        <div>
          <Link to="/my-cart" target="_blank">
            My Cart
          </Link>
        </div>
        <div>
          <Link to="/walking-tours" target="_blank">
            WalkingTours
          </Link>
        </div>
        <div>
          <Link to="/City/1" target="_blank">
            City 1 (New Delhi)
          </Link>
        </div>
        <div>
          <Link to="/City/2" target="_blank">
            City 1 (Jaipur)
          </Link>
        </div>
        <div>
          <Link to="/holiday-city/6" target="_blank">
            Holiday City
          </Link>
        </div>
        <div>
          <Link to="/holiday-place" target="_blank">
            Holiday Place
          </Link>
        </div>
        <div>
          <Link to="/holiday-package/6" target="_blank">
            holiday package (bhopal to sanchi tour)
          </Link>
        </div>
        <div>
          <Link to="/storytellers/6" target="_blank">
            StoryTellers (Pushkar)
          </Link>
        </div>
        <div>
          <Link to="/cityblogs/6" target="_blank">
            City blogs id 6
          </Link>
        </div>
        <div>
          <Link to="cityvlogs" target="_blank">
            City Vlogs
          </Link>
        </div>
        <div>
          <Link to="/product/113" target="_blank">
            Product Page
          </Link>
        </div>
        <div>
          <Link to="/socialmedia" target="_blank">
            Social Media
          </Link>
        </div>
        <div>
          <Link to="/payments" target="_blank">
            Payments
          </Link>
        </div>
        <div>
          <Link to="/holiday/1" target="_blank">
            Holiday Page
          </Link>
        </div>
        <div>
          <Link to="/search" target="_blank">
            Search Page
          </Link>
        </div>
        <div>
          <Link to="/search-results" target="_blank">
            Search Results
          </Link>
        </div>
        <div>
          <Link to="/travel-services" target="_blank">
            Travel Services
          </Link>
        </div>
        <div>
          <Link to="/experiences" target="_blank">
            experiences
          </Link>
        </div>
        <div>
          <Link to="/community" target="_blank">
            Community
          </Link>
        </div>
        <div>
          <Link to="/storyteller" target="_blank">
            Story Teller
          </Link>
        </div>
      </div>
    );
  }
}

export default {
  component: DemoPages,
};
