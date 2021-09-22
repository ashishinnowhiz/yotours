import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button } from 'reactstrap';

class SearchPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="world-bg-banner">
          <Container fluid={true}>
            <div className="search-group">
              <div className="search-input">
                <Input type="text" placeholder="Enter where you are traveling to"></Input>
              </div>
              <div className="search-dropdown">
                <UncontrolledDropdown>
                  <DropdownToggle caret color="nothing">
                    Travelers
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Travelers</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Travelers</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Travelers</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Travelers</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Travelers</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="search-btn">
                <Button color="primary">Explore Experiences&nbsp;&nbsp; &rarr;</Button>
              </div>
            </div>
          </Container>
          <Button color="nothing" className="scroll-down">View all destination<br /><span>&raquo;</span></Button>
        </div>
        <section className="py-50">
          <Container fluid={true}>
            <p>Select where you are traveling to</p>
            <div className="search-abc">
              <Button color="nothing" className="active">A</Button>
              <Button color="nothing">B</Button>
              <Button color="nothing">C</Button>
              <Button color="nothing">D</Button>
              <Button color="nothing">E</Button>
              <Button color="nothing">F</Button>
              <Button color="nothing">G</Button>
              <Button color="nothing">H</Button>
              <Button color="nothing">I</Button>
              <Button color="nothing">J</Button>
              <Button color="nothing">K</Button>
              <Button color="nothing">L</Button>
              <Button color="nothing">M</Button>
              <Button color="nothing">N</Button>
              <Button color="nothing">O</Button>
              <Button color="nothing">P</Button>
              <Button color="nothing">Q</Button>
              <Button color="nothing">R</Button>
              <Button color="nothing">S</Button>
              <Button color="nothing">T</Button>
              <Button color="nothing">U</Button>
              <Button color="nothing">V</Button>
              <Button color="nothing">W</Button>
              <Button color="nothing">X</Button>
              <Button color="nothing">Y</Button>
              <Button color="nothing">Z</Button>
            </div>
            <div className="search-city">
              <h4>Argentina <span>- 34 experiences</span></h4>
              <div>
                <NavLink to="">Buenos Aires (27)</NavLink>
                <NavLink to="">El Calafate (3)</NavLink>
                <NavLink to="">Salta (10)</NavLink>
                <NavLink to="">Villa Yacanto (10)</NavLink>
              </div>
            </div>
            <div className="search-city">
              <h4>Australia <span>- 45 experiences</span></h4>
              <div>
                <NavLink to="">Melbourne (8)</NavLink>
                <NavLink to="">Perth (21)</NavLink>
                <NavLink to="">Sydney (12)</NavLink>
              </div>
            </div>
            <div className="search-city">
              <h4>Austria <span>- 23 experiences</span></h4>
              <div>
                <NavLink to="">Innsbruck (4)</NavLink>
                <NavLink to="">Salzburg (13)</NavLink>
              </div>
            </div>
            <div className="search-city mb-0">
              <h4>Austria <span>- 34 experiences</span></h4>
              <div>
                <NavLink to="">Innsbruck (4)</NavLink>
                <NavLink to="">Salzburg (13)</NavLink>
              </div>
            </div>
          </Container>
        </section>
      </>
    )
  }
}


export default {
  component: SearchPage
}
