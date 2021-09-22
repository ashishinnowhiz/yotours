import React from 'react'
import CalendarSVG from '../../components/svg/calendar-svg'
import EyeSVG from '../../components/svg/eye-svg'
import HeartSVG from '../../components/svg/heart-svg'
import CommentSVG from '../../components/svg/comment-svg'
import moment from 'moment'
import {  Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const leftAlign = ({
  banner_img_link,
  title,
  description,
  author,
  BannerImg,
  published_date,
  view_count,
}) => (
  <Row>
    <Col md='6'>
      <div className='img-effect'>
      <img
          className="img-fluid lazy"
          data-srcset={banner_img_link || BannerImg}
          data-src={banner_img_link || BannerImg}
          src={BannerImg}
          alt=""
        />
      </div>
    </Col>
    <Col md='6' className='alternate-left'>
      <h3 className='bottom-line'>{title}</h3>
      <p>
        By <span className='text-grey'>{author}</span>
      </p>
      <p>{description}</p>
      <p>
        <NavLink className='text-primary' to='/'>
          Read more
        </NavLink>
      </p>
      <p>
        <span className='icon-text'>
          <CalendarSVG className='mt--3px mr-1' />
          {moment(published_date).format('DD MMM YYYYY')}
        </span>
        <span className='icon-text'>
          <EyeSVG className='mt--3px mr-1' /> {view_count}
        </span>
        <span className='icon-text'>
          <HeartSVG className='mt--3px mr-1' /> {view_count}
        </span>
        <span className='icon-text'>
          <CommentSVG className='mt--3px mr-1' /> {view_count}
        </span>
      </p>
    </Col>
  </Row>
)

export default leftAlign
