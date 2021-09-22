import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
import CalendarSVG from '../svg/calendar-svg';
import EyeSVG from '../svg/eye-svg';
import HeartSVG from '../svg/heart-svg';
import moment from 'moment'

class CityVlogCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cardclassName, vblog } = this.props;
    return (
      <Card body className={"cityvlog-card " + cardclassName} >
        <Row>
          <Col lg="5">
            <ReactPlayer
              url={vblog?.banner_img_link}
              playing={false}
              width='100%'
              height='100%'
              controls
            />
          </Col>
          <Col lg="7">
            <div className="cityvlog-text">
              <h2 className="bottom-line">{vblog?.title}</h2>
              <p>By <span className="author">{vblog?.author}</span></p>
              <p>
                <span className="icon-text"><CalendarSVG className="mt--3px mr-1" /> {moment(vblog?.published_date).format("DD MMM YYYYY")}</span>
                <span className="icon-text"><EyeSVG className="mt--3px mr-1" /> {vblog?.view_count}</span>
                <span className="icon-text"><HeartSVG className="mt--3px mr-1" /> 479</span>
              </p>
              <p className="mb-0">
                {vblog?.description}
              </p>
            </div>
          </Col>
        </Row>
      </Card >
    )
  }
}
export default CityVlogCard