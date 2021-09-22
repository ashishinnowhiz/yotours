import React from 'react';
const HeartSVG = (props) =>
    <svg
        className={props.className}
        style={{ fill: "none", stroke: "#909090", strokeLinecap: "round", strokeLinejoin: "round" }}
        xmlns="http://www.w3.org/2000/svg" width="15.036" height="13.242" viewBox="0 0 15.036 13.242"><defs></defs><path className="a" style={{ stroke: "#909090" }} d="M14.5,4.08a3.693,3.693,0,0,0-5.224,0l-.712.712L7.855,4.08A3.694,3.694,0,0,0,2.631,9.3l.712.712L8.566,15.24l5.224-5.224L14.5,9.3a3.693,3.693,0,0,0,0-5.224Z" transform="translate(-1.049 -2.498)" /></svg>
export default HeartSVG