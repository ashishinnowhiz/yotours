import React, { useState } from 'react';
import BannerImg from '../../images/banner1.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
  Button,
  Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const items = [
  {
    src: BannerImg,
    heading: "Truly discover the world",
    para: "Yo Tours® conceptualizes, designs & operates its own unique travel experiences",
    key: '1'
  },
  {
    src: BannerImg,
    heading: "Truly discover the world",
    para: "Yo Tours® conceptualizes, designs & operates its own unique travel experiences",
    key: '2'
  },
  {
    src: BannerImg,
    heading: "Truly discover the world",
    para: "Yo Tours® conceptualizes, designs & operates its own unique travel experiences",
    key: '3'
  }
];

const HomeCarousal = (props) => {
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
        <div style={{ backgroundImage: `url('${item.src}')` }} className="banner-img">
          <Container fluid={true}>
            <div className="d-table-m">
              <div className="d-table-middle">
                <div>
                  <h1>{item.heading}</h1>
                  <p>{item.para}</p>
                  <Button color="primary">Know more &rarr;</Button>
                </div>
              </div>
            </div>
          </Container>
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
    </Carousel>
  );
}

export default HomeCarousal;