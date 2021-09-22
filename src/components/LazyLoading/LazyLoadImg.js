import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { isArray } from "../../helpers/Utils";
import withUseIO from '../../HOC/WithUseIO'


const LazyLoadImg = ({
  productclassName,
  data,
  lazyClassName,
  settings,
  heading,
  staticImg
}) => {
  return isArray(data) ? (
    <section className="py-5">
      <Container fluid={true}>
        <h2 className="mb-3 heading-view-all">
          {heading}
          <NavLink className="view-all" to="">
            View All
          </NavLink>
        </h2>
        <Slider {...settings}>
          {data &&
            data.map(
              (
                {
                  bookingsCount,
                  featured_img,
                  hasOffer,
                  id,
                  offerValue,
                  price,
                  product_name,
                  timeDuration,
                },
                index
              ) => (
                <div key={id}>
                  <div className="product-container ">
                    <NavLink to={`/product/${id}`}>
                      <div
                        className={`product-card  ${productclassName} ${lazyClassName} `}
                        data-src={featured_img || staticImg}
                        style={{
                          backgroundImage: `url(${staticImg})`,
                        }}
                      >
                        {productclassName && productclassName ? (
                          <>
                            {hasOffer && (
                              <div className="offer-shape">
                                {offerValue}%
                                <br />
                                <span>OFF</span>
                              </div>
                            )}
                            <div className="bottom-text">
                              <h5>{product_name}</h5>
                              <p className="middle-details">
                                <span>$ {price} onwards</span> | {timeDuration}{" "}
                                hrs
                              </p>
                              <div className="bottom-details">
                                <p>{bookingsCount} times booked</p>
                                <p>Book Now &rarr;</p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {hasOffer && (
                              <div className="offer">Combo Offer</div>
                            )}
                            <div key={id} className="bottom-text">
                              <h5>{product_name}</h5>
                              <div className="bottom-details">
                                <p>$ {price} onwards</p>
                                <p>{timeDuration} hrs</p>
                                <p>Book Now &rarr;</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </NavLink>
                  </div>
                </div>
              )
            )}
        </Slider>
      </Container>
    </section>
  ) : null;
};

export default withUseIO(LazyLoadImg);
