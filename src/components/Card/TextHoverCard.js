import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../../images/banner1.jpg'
import { Card } from 'reactstrap'
import withUseIO from '../../HOC/WithUseIO'

class TextHoverCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { lazyClassName, staticImg, feature_img_link, name,  description, idx } = this.props
    return (
      <NavLink to=''>
        <Card
          body
          className={`text-hover-card ${lazyClassName} `}
          data-src={feature_img_link || staticImg}
          style={{
            backgroundImage: `url(${BannerImg})`,
          }}
        >
          <div className='number'>{idx}</div>
          <div className='bottom-text'>
            <h5>{name} –</h5>
            {/* <p>Watch The Neelakurinji Bloom</p> */}
          </div>
          <div className='hover-p'>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        </Card>
      </NavLink>
    )
  }
}
export default TextHoverCard
