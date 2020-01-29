import React from "react";
import "./loadingGIF.css";



function LoadingGif({ gifClass }) {

    return (
        <div className="gif-cont">
            <img className={gifClass} src="https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif" alt="loading"/>
        </div>
    )
}

export default LoadingGif;