import React from 'react';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import EnglishImg from '../../images/country/english.png';
import SpanishImg from '../../images/country/spain.png';

class ProductMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-menu">
        <Container fluid={true}>
          <ul>
            <li>
              <p className="text-label">With beer tasting</p>
              <UncontrolledDropdown>
                <DropdownToggle caret color="nothing">
                  $60 / person
                      </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>$60 / person</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li>
              <p className="text-label">With beer tasting</p>
              <UncontrolledDropdown>
                <DropdownToggle caret color="nothing">
                  $47 / person
                      </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>$47 / person</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li>
              <UncontrolledDropdown>
                <DropdownToggle caret color="nothing">
                  $more
                      </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>more</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li>
              <p className="text-label">Private tours can be booked</p>
            </li>
            <li>
              <p className="text-label">Duration</p>
              <p>12.5hrs</p>
            </li>
            <li>
              <p className="text-label">Tour runs in</p>
              <p>
                <span className="mr-2"><img src={EnglishImg} className="img-fluid" alt="" /> English</span>
                <span className="mr-2"><img src={SpanishImg} className="img-fluid" alt="" /> Spanish</span>
              </p>
            </li>
            <li>
              <Button color="orange">Today's last booking closes in 03 : 45 : 57</Button>
            </li>
            <li>
              <Button color="primary">Book</Button>
            </li>
          </ul>
        </Container>
      </div>
    )
  }
}
export default ProductMenu