import React, { useEffect } from 'react'
import { isArray } from '../helpers/Utils'
import useIO from '../components/LazyLoading/UseIo'

function withUseIO(Wrapped) {
  return function (props) {
    const [observer, setElements, entries] = useIO({
      threshold: 0,
      rootMargin: '0px 200px 50px 0px',
      root: null,
    })
    useEffect(() => {
      if (isArray(props.data)) {
        let img = Array.from(
          document.getElementsByClassName(props.lazyClassName)
        )
        setElements(img)
      }
    }, [props.data, setElements])

    useEffect(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          if (!props.isImg) {
            let backgroundSrc = lazyImage.dataset.src
            lazyImage.style.backgroundImage = 'url(' + backgroundSrc + ')'
          } else {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
          }
          lazyImage.classList.remove(props.lazyClassName)
          observer.unobserve(lazyImage)
        }
      })
    }, [entries, observer])
    const staticImg =
      'https://image.shutterstock.com/image-vector/dishes-icon-set-260nw-146492768.jpg'
    return <Wrapped staticImg={staticImg} {...props} />
  }
}
withUseIO.displayName = 'withUseIO'
export default withUseIO
