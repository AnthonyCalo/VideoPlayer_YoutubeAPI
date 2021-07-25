import React from 'react';

//video is in place of props. Now instead of props.video. Just write video
const VideoDetail=({video})=>{
    if(!video){
        return <div>Loading..</div>
    }else{
        let vidSrc = "https://www.youtube.com/embed/" + video.id.videoId
        console.log(video);
        return(
            <div className="ui segment">
                <div className='ui embed'>
                    <iframe allow="fullscreen" src={vidSrc}></iframe>
                </div>
                <div className="ui segment" >

                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                </div>
            </div>
            )
    }
}


export default VideoDetail;





