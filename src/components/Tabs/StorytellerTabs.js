import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import IndiaMapImage from '../../images/india-map.svg';

const StorytellerTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="basic-tab lg">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            India
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Europe
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <p>Click on a city below where you wish to work to apply or write us at <a href="mailto:career@yotours.in" className="text-primary">career@yotours.in</a> for queries.</p>
          <p>Please note that we receive a lot of applications and it is not possible to individually reply to all, <span className="text-orange">if you do not hear from us within 15 days from application date then there is a high probability that your application is not be considered at that time</span>, you can always re-apply.</p>
          <p className="text-center"><img src={IndiaMapImage} alt="" className="img-fluid" /></p>
        </TabPane>
        <TabPane tabId="2">
          <p>Click on a city below where you wish to work to apply or write us at <a href="mailto:career@yotours.in" className="text-primary">career@yotours.in</a> for queries.</p>
          <p>Please note that we receive a lot of applications and it is not possible to individually reply to all, <span className="text-orange">if you do not hear from us within 15 days from application date then there is a high probability that your application is not be considered at that time</span>, you can always re-apply.</p>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default StorytellerTabs;