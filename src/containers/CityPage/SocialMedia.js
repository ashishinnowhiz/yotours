import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import { Container, Row, Col, Card } from 'reactstrap';
import Slider from "react-slick";
import SocialMediaCard from '../../components/Card/SocialMediaCard';
class SocialMedia extends Component {
  render() {
    var settings1 = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    var settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    return (
      <>
        <Header className="on-banner" />
        <Banner className="no-margin" />
        <section className="py-5">
          <Container fluid={true}>
            <h2 className="mb-3">Instagram</h2>
            <Slider
              {...settings1}
            >
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
            </Slider>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <h2 className="mb-3">Facebook</h2>
            <Slider
              {...settings2}
            >
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
              <div>
                <SocialMediaCard />
              </div>
            </Slider>
          </Container>
        </section>
      </>
    )
  }
}

export default {
  component: SocialMedia
}