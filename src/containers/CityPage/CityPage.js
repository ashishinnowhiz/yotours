import React, { PureComponent } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import CityLeftFooter from './CityLeftFooter'
import { actions as cityActions } from '../../store/actions/city/city'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import FilterSVG from '../../components/svg/filter-svg'
import { FormattedMessage } from 'react-intl'
// import TravelService from '../../components/City/TravelService'
import CityExperience from '../../components/City/CityExperience'
import LazyLoadImg from '../../components/LazyLoading/LazyLoadImg'
import { settings } from '../../config/CarouselSetting'
import CityDescription from '../../components/City/CityDescription'
import { isArray } from '../../helpers/Utils'
import CityThemes from '../../components/City/CityThemes'
import NearbyCities from '../../components/City/NearbyCities'
import { withRouter } from 'react-router-dom'

class CityPage extends PureComponent {
  constructor() {
    super()
    this.state = {
      cityId: '',
    }
  }
  componentDidMount() {
    const cityId = this.props.match.params.cityId
    const { getCityDetails } = this.props
    this.setState({ cityId })
    getCityDetails(cityId)
  }
  handleNavigation = (cityId) => {
    this.props.history.push(`/City/${cityId}`)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const updatedCityId = this.props.match.params.cityId
    const { cityId } = this.state
    if (updatedCityId !== cityId) {
      const { getCityDetails } = this.props
      this.setState({ cityId: updatedCityId })
      getCityDetails(updatedCityId)
    }
  }
  render() {
    let {
      cityDetails: {
        categories,
        attractionTickets,
        activities,
        holidays,
        themes,
        limitedTimeDeals,
        city,
      },
    } = this.props
    const nearByCities = city && city.nearByCities
    city = city && city.city
    const cityId = this.props.match.params.cityId
    return (
      <>
        <Header className='on-banner' />
        <Banner
          className='no-margin'
          banner={(city && city.banner_img_link) || Banner}
          city={city && city.name}
          cityId={cityId}
        />
        <CityDescription city={city} />
        <CityExperience
          data={categories}
          city={city}
          lazyClassName='lazy-experience'
        />
        <CityThemes data={themes} lazyClassName='lazy-theme' />
        <LazyLoadImg
          settings={settings}
          productclassName='product-card2'
          data={limitedTimeDeals}
          lazyClassName='lazy-offer'
          heading={
            <FormattedMessage
              id='city.TOUR_TYPES'
              values={{
                tourName: 'Limited time deals',
                cityName: city && city.name,
                count: isArray(limitedTimeDeals) && limitedTimeDeals,
              }}
            />
          }
        />
        {isArray(categories) &&
          categories.map((category, index) => (
            <LazyLoadImg
              key={index}
              settings={settings}
              productclassName='product-card2'
              data={category.products}
              lazyClassName='lazy-category'
              heading={
                <FormattedMessage
                  id='city.TOUR_TYPES'
                  values={{
                    tourName: category.category,
                    cityName: city && city.name,
                    count: category.products.length,
                  }}
                />
              }
            />
          ))}
        <LazyLoadImg
          settings={settings}
          productclassName='product-card2'
          data={activities}
          lazyClassName='lazy-activity'
          heading={
            <FormattedMessage
              id='city.TOUR_TYPES'
              values={{
                tourName: 'Activities',
                cityName: city && city.name,
                count: isArray(activities) && activities.length,
              }}
            />
          }
        />
        <LazyLoadImg
          settings={settings}
          productclassName='product-card2'
          data={attractionTickets}
          lazyClassName='lazy-activity'
          heading={
            <FormattedMessage
              id='city.TOUR_TYPES'
              values={{
                tourName: 'Attraction tickets',
                cityName: city && city.name,
                count: isArray(attractionTickets) && attractionTickets.length,
              }}
            />
          }
        />
        <LazyLoadImg
          settings={settings}
          productclassName='product-card2'
          data={holidays}
          lazyClassName='lazy-holidays'
          heading={
            <FormattedMessage
              id='city.TOUR_TYPES'
              values={{
                tourName: 'Experience based holiday tours',
                cityName: city && city.name,
                count: isArray(holidays) && holidays.length,
              }}
            />
          }
        />
        {/* <TravelService /> */}
        <NearbyCities
          handleNavigation={this.handleNavigation}
          data={isArray(nearByCities) && nearByCities}
          lazyClassName='lazy-nearby'
          title='Check out nearby cities'
          redirect='city'
        />
        <div className='page-filter'>
          <div className='filter'>
            <Button color='primary'>
              <FilterSVG />
            </Button>
          </div>
          <div className='filter'>
            <Button color='primary'>
              <FilterSVG />
            </Button>
            <CityLeftFooter />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cityDetails: state.city.cityDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityDetails: (cityId) => dispatch(cityActions.fetchCityDetails(cityId)),
    cancelApiRequest: () => dispatch(cityActions.cancelApiRequest),
  }
}

function loadData(store, match) {
  return store.dispatch(cityActions.fetchCityDetails(match.split('/').pop()))
}

export default {
  component: withRouter(connect(mapStateToProps, mapDispatchToProps)(CityPage)),
  loadData: loadData,
}
