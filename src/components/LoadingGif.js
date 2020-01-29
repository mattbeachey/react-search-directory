import React from "react";
import "./loadingGIF.css";



function LoadingGif({ gifClass, loadText }) {

    return (
        <div className="gif-cont">
            <div className={loadText}>Loading...</div>
            <img className={gifClass} src="https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif" alt="loading"/>
        </div>
    )
}

export default LoadingGif;