import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Language = ({ languages, handleCurrencyChange, language }) => (
  <li>
    <UncontrolledDropdown>
      <DropdownToggle caret color='nothing'>
        {language}
      </DropdownToggle>
      <DropdownMenu>
        {languages.map((language) => (
          <DropdownItem key={language} onClick={handleCurrencyChange}>
            {language}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  </li>
);

export default Language;
