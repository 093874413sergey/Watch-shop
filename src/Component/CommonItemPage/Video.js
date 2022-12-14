import React from "react";
import ReactPlayer from 'react-player/youtube';

function Video () {
    return(
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=ZN0NHhdpsII&ab_channel=ROLEX' 
            playing={true}
            controls={true}
            light={true}
            width={570}
            height={320}
            
            />
        </div>
    )
}
export default Video;