import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BannerHolidayPackage from '../../components/Banner/BannerHolidayPackage'
import { Container } from 'reactstrap'
import HighlightOfTour from '../../components/HolidayPackage/HighlightOfTour'
import { connect } from 'react-redux'
import {
  getHolidaysPackageDetail,
  getRelatedHoliday,
} from '../../store/actions/holidayPackage/holidayPackage'
import TestimonialCard from '../../components/HolidayPackage/TestimonialCard'
import {
  groupByDaysItinerary,
  isArray,
  formatRelatedHolidays,
} from '../../helpers/Utils'
import {
  Community,
  FAQS,
  FoodAndAccommodation,
  GettingThere,
  Itinerary,
  InclusionAndExclusion,
  PackageEssential,
  Reviews,
} from '../../components/HolidayPackage'
import NearbyCities from '../../components/City/NearbyCities'
class HolidayPackage extends Component {
  componentDidMount() {
    const holidayId = this.props.match.params.holidayId
    const { getHolidays } = this.props
    this.setState({ holidayId })
    getHolidays(holidayId)
  }
  componentDidUpdate(prevProps) {
    const holidayId = this.props.match.params.holidayId
    const { getRelatedHoliday, relatedHolidays } = this.props
    if (!isArray(relatedHolidays)) {
      getRelatedHoliday(holidayId)
    }
  }
  render() {
    const { holidays, relatedHolidays } = this.props
    const groupDaysItinerary =
      holidays && groupByDaysItinerary(holidays.itinerarys)
    const relatedHolidaysData =
      relatedHolidays && formatRelatedHolidays(relatedHolidays)
    return (
      <>
        <Header className='on-banner' />
        <BannerHolidayPackage
          featured_img={holidays?.featured_img}
          product_name={holidays?.product_name}
          times_booked={holidays?.times_booked}
          duration={holidays?.duration}
          featured_img={holidays?.featured_img}
          pickups={holidays?.pickups?.[0]}
          peak_season={holidays?.peak_season}
          holiday_country={holidays?.holiday_country?.name}
          pricing={holidays?.pricing?.[0]}
          city={holidays?.city}
          className='no-margin'
        />
        <HighlightOfTour
          data={holidays?.highlights}
          lazyClassName='highlight-tour'
        />
        <TestimonialCard />
        <section className='py-50'>
          <Container fluid={true}>
            <Itinerary itinerary={groupDaysItinerary} />
            <InclusionAndExclusion />
            <GettingThere
              pickups={holidays?.pickups}
              dropoff={holidays?.dropoff}
            />
            <FoodAndAccommodation foods={holidays?.foods} />
            <PackageEssential
              data={holidays?.packing}
              isImg
              lazyClassName='package-essential'
            />
            <Reviews />
            <FAQS faqs={holidays?.faqs} />
          </Container>
        </section>
        <Community />
        <NearbyCities
          title='Check out similar tours'
          data={relatedHolidaysData}
          lazyClassName='similar-product'
        />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidayPackage.holidays,
    relatedHolidays: state.holidayPackage.relatedHolidays,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHolidays: (cityId) => dispatch(getHolidaysPackageDetail(cityId)),
    getRelatedHoliday: (cityId) => dispatch(getRelatedHoliday(cityId)),
  }
}

function loadData(store, match) {
  return store.dispatch(getHolidaysPackageDetail(match.split('/').pop()))
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(HolidayPackage),
  loadData: loadData,
}
