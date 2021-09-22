import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import HomeCityCard from '../Card/HomeCityCard';
import ProductCard from '../Card/ProductCard';

const HomeTabs2 = (props) => {
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
            Local Experiences
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Holidays
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="align-items-baseline">
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
            <Col lg="3" md="6" sm="6">
            </Col>
            <Col lg="3" md="6" sm="6">
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <ProductCard productclassName="product-card2" className="m-0" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="align-items-baseline">
            <Col md="3">
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
            <Col md="3">
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
            <Col md="3">
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
            <Col md="3">
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

export default HomeTabs2;