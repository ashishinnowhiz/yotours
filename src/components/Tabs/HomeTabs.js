import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import HomeCityCard from '../Card/HomeCityCard';

const HomeTabs = (props) => {
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
          <Row className="align-items-lg-baseline">
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="align-items-lg-baseline">
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="xl" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
            </Col>
            <Col md="3" sm="6">
              <div className="mb-4">
                <HomeCityCard className="md" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="lg" />
              </div>
              <div className="mb-4">
                <HomeCityCard className="sm" />
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default HomeTabs;