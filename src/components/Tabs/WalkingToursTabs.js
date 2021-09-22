import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CityExperienceCard from '../Card/CityExperienceCard';

const WalkingToursTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="basic-tab">
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
          <Row>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard className="button-bg" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard />
            </Col>
            <Col md="3">
              <CityExperienceCard className="button-bg" />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default WalkingToursTabs;