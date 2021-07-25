import React from 'react';
import './VideoItem.css';


const VideoItem = props => {
    var imgSRC= props.video.snippet.thumbnails.medium.url;
    return(
        <div className="item video-item" onClick={()=>props.onVideoSelect(props.video)}>
           <img alt={props.video.snippet.title} className="ui image" src={imgSRC}></img>
           <div className="content">
           <div className="header">{props.video.snippet.title}</div>
           </div>
        </div>
        )
}

export default VideoItem;



