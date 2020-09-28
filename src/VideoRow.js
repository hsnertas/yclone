import React from 'react';
import "./VideoRow.css";
function VideoRow({views, subs, description, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
    <h3>{title}</h3>
    <p className="videoRow__headline" >{channel} <span className="videoRow__subs">{subs}</span> subscribers {views} </p>
<p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
