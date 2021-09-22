import React from "react";
import PropTypes from "prop-types";

const BackgroundImg = ({ src, srcSet, alt, fallbackSrc, isLazy, onClick, style, lazyclassName }) => (
  <div
    className={isLazy ? lazyclassName : ""}
    srcSet={isLazy ? "" : srcSet}
    data-srcset={srcSet}
    data-src={src}
    style={{
      backgroundImage: `url(${isLazy ? fallbackSrc : src})`,
      width: "100%",
      height: "100%",
      ...style
    }}
    onClick={onClick}
  />
);

BackgroundImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

BackgroundImg.defaultProps = {
  onClick: () => {},
  isLazy: false,
};

export default BackgroundImg;
