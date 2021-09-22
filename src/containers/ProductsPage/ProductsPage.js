import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import BannerProduct from '../../components/Banner/BannerProduct'
import { Container, Row, Col } from 'reactstrap'
import LeftMenu from '../../components/Menu/LeftMenu'
import ProductMenu from '../../components/Menu/ProductMenu'
import TestimonialCard from '../../components/Card/TestimonialCard'
import ProductCard from '../../components/Card/ProductCard'
import CityCard from '../../components/Card/CityCard'
import InclusionTabs from '../../components/Tabs/InclusionTabs'
import ItineraryTabs from '../../components/Tabs/ItineraryTabs'
import CommentCard from '../../components/Card/CommentCard'
import TripAdvisorImg from '../../images/tripadvisor.png'
import { connect } from 'react-redux'
import { getProductDetail } from '../../store/actions/product/product'
import { isArray } from '../../helpers/Utils'
class ProductsPage extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId
    const { getProduct } = this.props
    getProduct(productId)
  }
  render() {
    const { product } = this.props
    const productDetails = product && product[0]
    return (
      <>
        <Header city={productDetails?.category_tour?.name} />
        <BannerProduct productDetails={productDetails} />
        <ProductMenu />
        <section>
          <Container fluid={true}>
            <LeftMenu leftMenuclassName='nav-left-fixed' />
            <div className='nav-right pt-5'>
              <div className='nav-right-padding'>
                <h2 id='summary' className='mt-5'>
                  Highlights of the {productDetails?.product_name}
                </h2>
                <ul id='highlight' className='dot-orange half-li my-4'>
                  {productDetails?.highlight_tour ||
                    productDetails?.short_description}
                </ul>
                <TestimonialCard reviews={productDetails?.reviews} />
                <h2 id='description' className='mt-5'>Tour description</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productDetails?.product_description,
                  }}
                />
                <h2 id='itinerary' className='mt-5 mb-3'>Itinerary</h2>
                <ItineraryTabs productDetails={productDetails} />
                <h2 id='exclusion' className='mt-5'>Inclusions</h2>
                <p>This tour is available in the following variants.</p>
                <InclusionTabs productDetails={productDetails} />
                <h2 id='#exclusions' className='mt-5'>Exclusions</h2>
                <ul className='dot-orange'>
                  {productDetails &&
                    isArray(productDetails.exclusions) &&
                    productDetails.exclusions.map((exclusion) => (
                      <li>{exclusion.exclusion_package}</li>
                    ))}
                </ul>
                <h2 id='review' className='mt-5'>Reviews</h2>
                <div className='my-5'>
                  <Row>
                    <Col lg='3'></Col>
                    <Col lg='7'></Col>
                    <Col lg='2'>
                      <div className='bg-light box-shadow p-3'>
                        <p className='mb-0'>
                          Rated 'excellent' by travelers on{' '}
                          <img
                            className='img-fluid'
                            src={TripAdvisorImg}
                            alt=''
                          />
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
              {/* <div className='bg-grey py-5 mt-5'>
                <div className='nav-right-padding pr-5'>
                  <h2 className='mb-3 text-white'>Check out similar products</h2>
                  <Row>
                    <Col lg='4'>
                      <ProductCard productclassName='product-card2' />
                    </Col>
                    <Col lg='4'>
                      <ProductCard productclassName='product-card2' />
                    </Col>
                    <Col lg='4'>
                      <ProductCard productclassName='product-card2' />
                    </Col>
                  </Row>
                  <h2 className='mb-3 mt-5 text-white'>Check out nearby cities</h2>
                  <Row>
                    <Col lg='4'>
                      <CityCard />
                    </Col>
                    <Col lg='4'>
                      <CityCard />
                    </Col>
                    <Col lg='4'>
                      <CityCard />
                    </Col>
                  </Row>
                </div>
              </div> */}
            </div>
            <div className='clearfix'></div>
          </Container>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(getProductDetail(productId)),
  }
}

function loadData(store, match) {
  return store.dispatch(getProductDetail(match.split('/').pop()))
}
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ProductsPage),
  loadData: loadData,
}
