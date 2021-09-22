import React, { useState } from 'react';
import BannerImg from '../../images/banner1.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const items = [
  {
    src: BannerImg,
    key: '1'
  },
  {
    src: BannerImg,
    key: '2'
  },
  {
    src: BannerImg,
    key: '3'
  }
];

const HolidayCarousal = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div style={{ backgroundImage: `url('${item.src}')` }} className="holiday-carousal">
          <div className="holiday-right">
            <Button color="danger">Dussera Offer</Button>
            <h2>40% off on all tours in Sikkim</h2>
            <p>This Dussera, come to visit Sikkim and enjoy walking tours, local food tasting tours, multi-day trips and many more with Yo Tours.</p>
            <NavLink to="">Explore &rarr;</NavLink>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} /> */}
      {/* <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
    </Carousel>
  );
}

export default HolidayCarousal;