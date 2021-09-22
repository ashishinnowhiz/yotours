import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { Container, Row, Col, Button } from 'reactstrap'
import ProductMenu from '../../components/Menu/ProductMenu'
import Footer from '../../components/Footer/Footer'
import BannerHoliday from '../../components/Banner/BannerHoliday'
import HolidayMenu from '../../components/Menu/HolidayMenu'
import HolidayCarousal from '../../components/carousal/HolidayCarousal'
import HolidayImage from '../../images/holiday-image.svg'
import HoneymoonCard from '../../components/Card/HoneymoonCard'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getHolidayDetail } from '../../store/actions/holiday/holiday'
import {
  getTravelingWith,
  getTopRateHolidays,
  sortDestinationByState,
} from '../../helpers/Utils'
import HolidayLookingFor from '../../components/HolidayPage/HolidayLookingFor'
import TravelingWith from '../../components/HolidayPage/TravelingWith'
import TopRatedHoliday from '../../components/HolidayPage/TopRatedHoliday'
import LazyLoadHolidayCat from '../../components/HolidayPage/LazyLoadHolidayCat'
import { settings } from '../../config/CarouselSetting'
import { isArray } from '../../helpers/Utils'

class HolidayPage extends Component {
  componentDidMount() {
    const countryId = this.props.match.params.countryId
    const { getHoliday } = this.props
    this.setState({ countryId })
    getHoliday(countryId)
  }
  render() {
    const { holiday } = this.props
    const { trvlCategoryWithImage, trvlCategories, trvCatkeys } =
      holiday && getTravelingWith(holiday.holidays)
    const topRatedHolidays = holiday && getTopRateHolidays(holiday.holidays)
    const {popularDestination, isGreater} = holiday && sortDestinationByState(holiday.cities)
    return (
      <>
        <Header className='on-banner' />
        <BannerHoliday className='no-margin' />
        <ProductMenu />
        <section>
          <Container fluid={true}>
            <HolidayMenu
              city={holiday?.cities}
              regions={holiday?.regions}
              leftMenuclassName='nav-left-fixed'
            />
            <div className='nav-right pt-5'>
              <div className='nav-right-padding'>
                <HolidayLookingFor
                  data={holiday?.themes}
                  lazyClassName='looking-for'
                />
                {/* <div className='holiday-carousal-container'>
                  <HolidayCarousal />
                </div> */}
                <TravelingWith
                  data={trvlCategoryWithImage}
                  title="Who are you traveling with ?"
                  lazyClassName='traveling-with'
                />
                {/* reuse the same component because everything is common between travelingWith and PopularDestination */}
                <TravelingWith
                  data={popularDestination}
                  title="Popular destination"
                  isGreater={isGreater}
                  lazyClassName='popular-destination'
                />
                <TopRatedHoliday
                  data={topRatedHolidays}
                  lazyClassName='top-rated-holidays'
                />
                {isArray(trvCatkeys) &&
                  trvCatkeys.map((category, index) => (
                    <LazyLoadHolidayCat
                      key={index}
                      settings={settings}
                      productclassName='product-card2'
                      data={trvlCategories[category]}
                      lazyClassName='lazy-category'
                      heading={category}
                    />
                  ))}

                {/* <section className='py-50'>
                  <HoneymoonCard />
                </section> */}

                <section className='py-50'>
                  <Row>
                    <Col md='6'>
                      <img src={HolidayImage} alt='' />
                    </Col>
                    <Col md='6'>
                      <h2>Want your own customized holiday plan ?</h2>
                      <p>Worry not, because you can do that here</p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna
                      </p>
                      <p>
                        <Button color='primary'>
                          Create your customized holiday plan &rarr;
                        </Button>
                      </p>
                      <p>
                        <b>OR</b>
                      </p>
                      <Button color='border'>
                        Contact us for customization &rarr;
                      </Button>
                    </Col>
                  </Row>
                </section>
              </div>
            </div>
            <div className='clearfix'></div>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    holiday: state.holiday.holiday,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHoliday: (countryId) => dispatch(getHolidayDetail(countryId)),
  }
}

function loadData(store, match) {
  return store.dispatch(getHolidayDetail(match.split('/').pop()))
}

export default {
  component: withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HolidayPage)
  ),
  loadData: loadData,
}
