import React from "react"
import { Button, UncontrolledCollapse } from "reactstrap"
import { isArray } from '../../helpers/Utils'

const FAQS = ({faqs}) => {
  return (
    <div className='collapse-con'>
      <Button color='nothing' id='toggler2'>
        FAQS
      </Button>
      <UncontrolledCollapse toggler='#toggler2'>
        {isArray(faqs) && faqs.map((faq, idx)=>
        <div key={idx}  className='collapse-body'>
            <div className='collapse-con'>
              <Button color='nothing' id={`toggler${idx}`}>
                {faq.ques}
              </Button>
              <UncontrolledCollapse toggler={`#toggler${idx}`}>
                <div className='collapse-body'>
                  <p> {faq.ans}</p>
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
        )}
      </UncontrolledCollapse>
    </div>
  )
}

export default FAQS
