import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import { Container, Row, Col } from 'reactstrap'
import StoryTellerCard from '../../components/Card/StoryTellerCard'
import { actions as cityActions } from '../../store/actions/city/city'
import { connect } from 'react-redux'

class StoryTellers extends Component {
  componentDidMount() {
    const cityId = this.props.match.params.cityId
    const { storyTellers } = this.props
    storyTellers(cityId)
  }
  render() {
    const { stroyTeller, city } = this.props
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
        <section className='py-50'>
          <Container fluid={true}>
            <Row>
              <Col md='12'>
                <h2 className='mb-4'>Storytellers in {city && city.name}</h2>
              </Col>
              <StoryTellerCard data={stroyTeller} />
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stroyTeller: state.city.stroyTeller,
    city: state.city.cityDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storyTellers: (cityId) =>
      dispatch(cityActions.fetchStoryTellerDetails(cityId)),
  }
}

function loadData(store, match) {
  return store.dispatch(
    cityActions.fetchStoryTellerDetails(match.split('/').pop())
  )
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(StoryTellers),
  loadData: loadData,
}
