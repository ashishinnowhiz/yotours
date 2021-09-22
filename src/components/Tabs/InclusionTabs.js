import React, { useState } from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'
import { isArray } from '../../helpers/Utils'

const InclusionTabs = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const { productDetails } = props
  const inclusions = (productDetails && productDetails.inclusions) || []
  let inclusionObj = {}

  for (let index = 0; index < inclusions.length; index++) {
    let tourName = inclusions[index]['inclusion_package']
    const isKeyExist =
      inclusionObj &&
      inclusionObj[tourName] &&
      Object.keys(inclusionObj[tourName])
    if (isKeyExist)
      inclusionObj[tourName] = [...inclusionObj[tourName], inclusions[index]]
    inclusionObj[tourName] = [inclusions[index]]
  }
  return (
    <div className='basic-tab'>
      <Nav tabs>
        {inclusionObj &&
          isArray(Object.keys(inclusionObj)) &&
          Object.keys(inclusionObj).map((inclusion, index) => (
            <NavItem key={index}>
              <NavLink
                className={classnames({ active: activeTab === index })}
                onClick={() => {
                  toggle(index)
                }}
              >
                {inclusion}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {inclusionObj &&
          isArray(Object.keys(inclusionObj)) &&
          Object.values(inclusionObj).map((inclusion, index) =>
            inclusion.map((inc) => (
              <TabPane tabId={index}>
                <ul className='dot-orange'>
                  <li>
                    {inc.inclusion_description}
                    {inc?.category?.name}
                  </li>
                </ul>
              </TabPane>
            ))
          )}
      </TabContent>
    </div>
  )
}

export default InclusionTabs
