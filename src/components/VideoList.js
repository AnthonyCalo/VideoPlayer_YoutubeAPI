import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedList = props.videos.map((vid, index)=>{
        return(
            <VideoItem key={index} video={vid} onVideoSelect={props.videoSelect}/>
            )
    });
    return(
        <div className="ui relaxed divided list">{renderedList}</div>

    );
};


export default VideoList;



