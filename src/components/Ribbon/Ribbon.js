import React from 'react';

export default function Ribbon(props) {
  const {title, caption} = props
  return (
    <div className="overlay_ribbon">
      <div className="ribbon_content" >
          <div className="ribbon_title">
            {title}

          </div>
          <div className="ribbon_caption"> {caption} </div>
      </div>
    </div>
  )
}
