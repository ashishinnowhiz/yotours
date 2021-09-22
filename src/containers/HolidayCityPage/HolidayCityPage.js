import React, { Component } from "react"
import Header from "../../components/Header/Header"
import BannerHolidayCity from "../../components/Banner/BannerHolidayCity"
import Footer from "../../components/Footer/Footer"
import GettingAroundTabs from "../../components/Tabs/GettingAroundTabs"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getHolidaysCityDetail } from "../../store/actions/holidays/holidays"
import NearbyCities from "../../components/City/NearbyCities"
import { groupGuideData } from "../../helpers/Utils"
import {
  Blogs,
  CityDescription,
  Experience,
  TravelCost,
  HowToReach,
  PackingEssential,
  ShoppingMarket,
  StayInstruction,
  TopThingsToDO,
  Vblogs,
  WhereToEat,
  WhereToStay,
} from "../../components/Holidays/Index"

class HolidayCityPage extends Component {
  componentDidMount() {
    const cityId = this.props.match.params.cityId
    const { getHolidays } = this.props
    this.setState({ cityId })
    getHolidays(cityId)
  }
  render() {
    const { holidays } = this.props
    const cityName = holidays?.city?.city?.name
    const guides = holidays && groupGuideData(holidays.guides, "category")
    const thingsTodo =
      holidays && groupGuideData(holidays.topThingsToDo, "type")
    return (
      <>
        <Header className='on-banner' />
        <BannerHolidayCity city={holidays?.city?.city} className='no-margin' />
        <CityDescription city={holidays?.city?.city} />
        <TopThingsToDO
          cityName={cityName}
          data={thingsTodo?.Monument}
          lazyClassName='things-to-do'
        />
        <Experience
          data={holidays?.local_experiences}
          lazyClassName='local-experience'
          heading={`Must-have local experiences in ${cityName}`}
        />
        <TravelCost cityName={cityName} travelCost={guides?.Travel_Cost} />

        <Experience
          heading={`Top free experiences in ${cityName}`}
          data={holidays?.free_experiences}
          lazyClassName='top-experience'
        />
        <HowToReach cityName={cityName} reach={guides?.How_to_Reach} />

        <GettingAroundTabs
          cityName={cityName}
          gettingAround={guides?.Getting_Around}
        />
        <WhereToStay
          lazyClassName='stay'
          cityName={cityName}
          data={guides?.Stays}
        />
        <WhereToEat
          cityName={cityName}
          foodDrinks={thingsTodo?.["Food_&_Drinks"]}
        />
        <ShoppingMarket cityName={cityName} shopping={thingsTodo?.Market} />
        <StayInstruction scams={guides?.Avoid_Scam} cityName={cityName} />
        <Experience
          heading={`Interesting Day trips nearby ${cityName}`}
          data={holidays?.day_trips}
          lazyClassName='top-experience'
        />
        <PackingEssential
          lazyClassName='essentials'
          data={guides?.Packing_Essentials}
          cityName={cityName}
        />
        <Blogs
          cityName={cityName}
          data={holidays?.blogs}
          lazyClassName='blogs'
          isImg
        />
        <Vblogs cityName={cityName} data={holidays?.vlogs} />
        <NearbyCities 
        lazyClassName='lazy-nearby'
        title='Check out nearby cities'
        redirect='city'
        data={holidays?.city?.nearByCities} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays.holidays,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHolidays: (cityId) => dispatch(getHolidaysCityDetail(cityId)),
  }
}

function loadData(store, match) {
  return store.dispatch(getHolidaysCityDetail(match.split("/").pop()))
}

export default {
  component: withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HolidayCityPage)
  ),
  loadData: loadData,
}
