import React, { useState } from 'react'
import { isArray } from '../../helpers/Utils'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'
import classnames from 'classnames'
import ProfileImage from '../../images/profile.jpg'
import { NavLink as NavLink1 } from 'react-router-dom'
import CarImg from '../../images/car.svg'

const GettingAroundTabs = ({ gettingAround, cityName }) => {
  const [activeTab, setActiveTab] = useState(0)
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return isArray(gettingAround) ? (
    <section className='py-5'>
      <Container fluid={true}>
        <h2 className='mb-4'>Getting around in {cityName}</h2>
        <div className='getting-around-tab'>
          <div className='column-tab'>
            <Nav tabs>
              {isArray(gettingAround) &&
                gettingAround.map((around, idx) => (
                  <NavItem key={idx}>
                    <NavLink
                      className={classnames({
                        active: activeTab === idx,
                      })}
                      onClick={() => {
                        toggle(idx)
                      }}
                    >
                      <img src={CarImg} alt='' />
                      <p>{around.sub_category}</p>
                    </NavLink>
                  </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
              {isArray(gettingAround) &&
                gettingAround.map((around, idx) => (
                  <TabPane key={around.id} tabId={idx}>
                    {around.description}
                  </TabPane>
                ))}
              {/* <TabPane tabId='1'>
                <ul className='dot-grey mb-3'>
                  <li>
                    Munich boasts a superb network of cycle paths, which locals
                    use to commute to work.
                  </li>
                  <li>
                    Cycle hire is easy to arrange. Try Radius Tours at the
                    Hauptbahnhof.
                  </li>
                  <li>
                    Bikes can be taken on the S-Bahn but not from 6am to 9am and
                    4pm to 6pm Monday to Friday (rush hour). All bikes need a
                    ticket.
                  </li>
                  <li>
                    Helmets are not legally required but are of course
                    recommended.
                  </li>
                  <li>
                    Some commuters ride incredibly fast – dallying on major
                    cycle paths is dangerous.
                  </li>
                </ul>
                <h4>Where to find a bicycle ?</h4>
                <div className='shape-name xxl mb-3'>
                  <div
                    className='shape-circle no-radius'
                    style={{ backgroundImage: `url(${ProfileImage})` }}
                  ></div>
                  <div className='shape-text'>
                    <h3 className='pt-1'>YULU Cycle Stands</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo
                    </p>
                    <p>
                      App download link :{' '}
                      <NavLink1 to='' className='text-primary'>
                        https://yuluzone.com
                      </NavLink1>
                    </p>
                  </div>
                </div>
                <div className='shape-name xxl mb-3'>
                  <div
                    className='shape-circle no-radius'
                    style={{ backgroundImage: `url(${ProfileImage})` }}
                  ></div>
                  <div className='shape-text'>
                    <h3 className='pt-1'>YULU Cycle Stands</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo
                    </p>
                    <p>
                      App download link :{' '}
                      <NavLink1 to='' className='text-primary'>
                        https://yuluzone.com
                      </NavLink1>
                    </p>
                  </div>
                </div>
              </TabPane> */}
            </TabContent>
          </div>
        </div>
      </Container>
    </section>
  ) : null
}

export default GettingAroundTabs
