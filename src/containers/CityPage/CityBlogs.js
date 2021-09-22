import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import { Container } from 'reactstrap'
import CityBlog from '../../components/CityBlog/CityBlog'
import { actions as cityActions } from '../../store/actions/city/city'
import { connect } from 'react-redux'

class CityBlogs extends Component {
  componentDidMount() {
    const cityId = this.props.match.params.cityId
    const { getCityBlogDetails } = this.props
    getCityBlogDetails(cityId)
  }
  render() {
    const { cityBlogs, city } = this.props
    const cityId = this.props.match.params.cityId
    return (
      <>
        <Header className='on-banner' />
        <Banner
          banner={(city && city.banner_img_link) || Banner}
          city={city && city.name}
          cityId={cityId}
          className='no-margin'
        />
        <section className='py-10'>
          <Container fluid={true}>
            <h2 className='mb-4'>City Blogs</h2>
          </Container>
        </section>

        <CityBlog cityBlog={cityBlogs && cityBlogs} isImg lazyClassName="city-blog" />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city.cityDetails,
    cityBlogs: state.city.cityBlogs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityBlogDetails: (cityId) =>
      dispatch(cityActions.fetchCityBlogDetails(cityId)),
    cancelApiRequest: () => dispatch(cityActions.cancelApiRequest),
  }
}

function loadData(store, match) {
  return store.dispatch(
    cityActions.fetchCityBlogDetails(match.split('/').pop())
  )
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(CityBlogs),
  loadData: loadData,
}
