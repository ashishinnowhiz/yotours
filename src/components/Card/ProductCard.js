import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
class ProductCard extends PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      productclassName,
      productbutton,
      product: {
        bookingsCount,
        featured_img,
        hasOffer,
        id,
        offerValue,
        price,
        product_name,
        timeDuration,
      },
      staticImg
    } = this.props;
    return (
      <div key={id} className={"product-container " + className}>
        {(productbutton == true) ?
          <Button color="primary" className={productclassName}>View All<br/>&rarr;</Button>
          :
          <NavLink to="/product">
            <div
              className={"product-card " + productclassName}
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
                      <span>$ {price} onwards</span> | {timeDuration} hrs
                  </p>
                    <div className="bottom-details">
                      <p>{bookingsCount} times booked</p>
                      <p>Book Now &rarr;</p>
                    </div>
                  </div>
                </>
              ) : (
                  <>
                    {hasOffer && <div className="offer">Combo Offer</div>}
                    <div key={id} className="bottom-text">
                      <h5>
                        {product_name}
                      </h5>
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
        }
      </div>
    );
  }
}
ProductCard.defaultProps = {
  product: {
    bookingsCount: 0,
    featured_img: '',
    hasOffer: 0,
    id: 'xyz',
    offerValue: 0,
    price: 0,
    product_name: '',
    timeDuration: 0,
  }
};
export default ProductCard;
