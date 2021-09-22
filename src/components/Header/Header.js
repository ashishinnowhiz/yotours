import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  changeLanguage,
  currencyConverter,
} from '../../store/actions/header/header';
import SearchSVG from '../svg/search-svg';
import MyProfileDropdown from './MyProfileDropdown';
import TourTypeDropdown from './TourTypeDropdown';
import MenuWithNav from './MenuWithNav';
// import CurrencyDropdown from './CurrencyDropdown';
// import LanguageDropdown from './LanguageDropdown';
import MenuSVG from '../svg/menu-svg';
class Header extends React.Component {
 

  handleChangeLanguage = (e) => {
    const { handleLanguage } = this.props;
    handleLanguage(e.currentTarget.textContent);
  };
  handleCurrencyChange = (e) => {
    const { handleCurrencyChange } = this.props;
    handleCurrencyChange(e.currentTarget.textContent);
  };
  render() {
    const currencies = ['INR', 'USD', 'JPY'];
    const languages = ['en', 'de'];
    const { className, language, currency } = this.props;
    return (
      <header className={className} id="top-header">
        <Container fluid={true}>
          <div className="header-left">
            <div className="logo">
              <NavLink to="/">YO TOURS</NavLink>
            </div>
            <div className="header-search">
              <span className="search-icon">
                <SearchSVG />
              </span>
              <Input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="header-right">
            <ul>
              <TourTypeDropdown />
              <MenuWithNav />
              <li className="resp-menu">
                <Button color="nothing">
                  <MenuSVG />
                </Button>
              </li>
              <MyProfileDropdown />
              {/* <CurrencyDropdown
                currency={currency}
                currencies={currencies}
                handleCurrencyChange={this.handleCurrencyChange}
              />
              <LanguageDropdown
                language={language}
                languages={languages}
                handleChangeLanguage={this.handleChangeLanguage}
              /> */}
            </ul>
          </div>
          <div className="resp-ul">
            <div className="logo">
              <NavLink to="/">Yo Tours</NavLink>
            </div>
            <ul>
              <TourTypeDropdown />
              <MenuWithNav />
            </ul>
          </div>
          <div className="clearfix"></div>
        </Container>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencyConversion: state.header.currencyConversion,
    currency: state.header.currency,
    language: state.header.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLanguage: (language) => dispatch(changeLanguage(language)),
    handleCurrencyChange: (currency) => dispatch(currencyConverter(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
