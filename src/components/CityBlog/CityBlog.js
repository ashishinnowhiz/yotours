/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { isArray } from '../../helpers/Utils'
import useIO from '../LazyLoading/UseIo'
import LeftAlign from './LeftAlign'
import RightAlign from './RightAlign'
import BannerImg from '../../images/banner1.jpg'

const cityBlog = ({ cityBlog }) => {
  const [observer, setElements, entries] = useIO({
    threshold: 0,
    rootMargin: '0px 100px 50px 0px',
    root: null,
  })
  useEffect(() => {
    if (isArray(cityBlog)) {
      let img = Array.from(document.getElementsByClassName('lazy'))
      setElements(img)
    }
  }, [cityBlog, setElements])

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        lazyImage.classList.remove('lazy')
        observer.unobserve(lazyImage)
      }
    })
  }, [entries, observer])

  return isArray(cityBlog)
    ? cityBlog.map(
        (
          blog,
          index
        ) => (
          <section key={index} className='py-50'>
            <Container fluid={true}>
              {index % 2 == 0 ? (
                <LeftAlign {...blog} BannerImg={BannerImg} />
              ) : (
                <RightAlign {...blog} BannerImg={BannerImg} />
              )}
            </Container>
          </section>
        )
      )
    : null
}

export default cityBlog
