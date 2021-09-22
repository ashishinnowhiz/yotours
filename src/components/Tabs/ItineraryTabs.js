import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import { isArray } from '../../helpers/Utils';

const ItineraryTabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const itinerary = props.productDetails && props.productDetails.itinerary;
  return (
    <div className='column-tab'>
      <Nav tabs>
        {isArray(itinerary) &&
          itinerary.map((itinerary, index) => (
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === index })}
                onClick={() => {
                  toggle(index);
                }}
              >
                {itinerary.place_type}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {isArray(itinerary) &&
          itinerary.map((itinerary, index) => (
            <TabPane tabId={index}>
              <h2>{itinerary.itinerary_title}</h2>
              {itinerary.describe_experience}
              <ul className='dot-orange'>
                <li>Price Tour Included : {itinerary.included_price_tour}</li>
                <li>Spent Time : {itinerary.spent_time}</li>
                {itinerary.meal_type && (
                  <li>
                    Meal Tye: {itinerary.meal_type}
                    <br />
                    Description: {itinerary.meal_description}
                  </li>
                )}
              </ul>
            </TabPane>
          ))}
      </TabContent>
    </div>
  );
};

export default ItineraryTabs;
