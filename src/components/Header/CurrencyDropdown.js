import React from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const CurrencyDropdown = ({ currencies, handleCurrencyChange, currency }) => (
  <li>
    <UncontrolledDropdown>
      <DropdownToggle caret color='nothing'>
        {currency}
      </DropdownToggle>
      <DropdownMenu>
        {currencies.map((currency, idx) => (
          <DropdownItem key={idx} currency={currency} onClick={handleCurrencyChange}>
            {currency}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  </li>
)

export default CurrencyDropdown
