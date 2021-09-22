import React from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { FormattedMessage } from 'react-intl'

const tourTypeDropDown = (props) => {
  return (
    <li className="remove-resp">
      <UncontrolledDropdown>
        <DropdownToggle caret color='nothing'>
          {/* <FormattedMessage id='header.LOCAL_EXPERIENCE' /> */}
          Local experiences

        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a" href="/walking-tours">Walking Tours</DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/walking-tours">Sightseeing Yours</DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/walking-tours">Day Trips</DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/walking-tours">Activities</DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="a" href="/walking-tours">Attraction Tickets</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </li>
  )
}

export default tourTypeDropDown
