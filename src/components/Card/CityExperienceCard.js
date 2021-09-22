import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "reactstrap";

class CityExperienceCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      feature_img_link,
      category,
      lazyClassName,
      staticImg,
      banner_img_link,
      name
    } = this.props;
    return (
      <>
        {className ? (
          <NavLink to="">
            <Card body className={"cityexperience-card " + className}>
              <div className="bottom-text">
                <h2>
                  View All
                  <br />
                  &rarr;
                </h2>
              </div>
            </Card>
          </NavLink>
        ) : (
          <NavLink to="">
            <Card
              body
              className={"cityexperience-card "+ lazyClassName}
              data-src={feature_img_link || banner_img_link || staticImg}
              style={{
                backgroundImage: `url(${staticImg})`,
              }}
            >
              <div className="bottom-text">
                <h2>{category || name}</h2>
              </div>
            </Card>
          </NavLink>
        )}
      </>
    );
  }
}

export default (CityExperienceCard);
