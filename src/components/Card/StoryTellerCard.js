/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Card, Col } from "reactstrap";
import { isArray } from "../../helpers/Utils";
import moment from "moment";
import withUseIO from '../../HOC/WithUseIO'

const StoryTellerCard = ({ data }) => {
  return isArray(data)
    ? data.map(({ name, id, profile_img, description, doj, staticImg }) => {
        const joinDate = moment(doj);
        const todayDate = moment(new Date())
        const years = todayDate.diff(joinDate, 'years')
        const months = todayDate.diff(joinDate, 'months')
        let experience = ''
        if(years > 0 && months > 0) experience = `${years} years ${months} months`
        else if (years > 0 ) experience = `${years} years`
        else experience = `${months} months`
        return (
          <Col key={id} md="6" className="mb-4">
            <Card body className="storyteller-card">
              <div
                className="storyteller-image lazy"
                data-src={`${profile_img || staticImg}`}
                style={{ backgroundImage: "url(/images/banner1.jpg)" }}
              ></div>
              <div className="storyteller-text">
                <h3 className="bottom-line text-white">{name}</h3>
                <p className="mb-0">
                  Certification : <span className="text-white">Excellent</span>
                </p>
                <p>
                  Worked with Yo Tours for :{" "}
                  <span className="text-white">{experience}</span>
                </p>
                <p className="mb-0">{description}</p>
              </div>
            </Card>
          </Col>
        );
      })
    : null;
};

export default withUseIO(StoryTellerCard);
