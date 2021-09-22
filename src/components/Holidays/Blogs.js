import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CalendarSVG from '../../components/svg/calendar-svg'
import HeartSVG from '../../components/svg/heart-svg'
import CommentSVG from '../../components/svg/comment-svg'
import { isArray } from '../../helpers/Utils'
import withUseIO from '../../HOC/WithUseIO'
import moment from 'moment'
const blogs = ({ data, cityName, staticImg}) => {
 
  return (
    isArray(data) ?
      <section className='py-50'>
        <Container fluid={true}>
          <h2 className='mb-4'>Blogs on {cityName}</h2>
          <Row>
            {isArray(data) &&
              data.map((blog) => (
                <Col key={blog.id} md='3' className='mb-4'>
                  <div className='img-effect'>
                    <img
                      className='img-fluid blogs'
                      data-srcset={blog.banner_img_link || staticImg}
                      data-src={blog.banner_img_link || staticImg}
                      src={staticImg}
                      alt=''
                    />
                  </div>
                  <div className='alternate-left'>
                    <h3 className='bottom-line'>{blog.title}</h3>
                    <p className='mb-0'>
                      By <span className='text-grey'>{blog.author}</span>
                    </p>
                    <p>
                      <span className='icon-text'>
                        <CalendarSVG className='mt--3px mr-1' />
                        {moment(blog.published_date).format('DD MMM YYYYY')}
                      </span>
                      <span className='icon-text'>
                        <HeartSVG className='mt--3px mr-1' /> {blog.likes}
                      </span>
                      <span className='icon-text'>
                        <CommentSVG className='mt--3px mr-1' /> {blog.view_count}
                      </span>
                    </p>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    : null
  )
}

export default withUseIO(blogs)
