import React from "react";
import "../App.css";

function GifRandomizer() {
    const TOTAL_NUMBER_OF_GIFS = 7;
    const randomGifIndex = Math.floor(Math.random() * TOTAL_NUMBER_OF_GIFS);
    const animalGifUrls = ["https://giphy.com/embed/GuTd5EmBELE9vy4oBo", "https://giphy.com/embed/RQgzLsPYlzrBC", "https://giphy.com/embed/14dv1oGhoLfa0w", "https://giphy.com/embed/L2R80rB8CQdlS", "https://giphy.com/embed/mUUPmQ2UrdRi8", "https://giphy.com/embed/tHWvkvQqdj3pAeIWv3", "https://giphy.com/embed/5QXWRp1CNGnMnZunC3"];

    return (
        <div className="GifRandomizer-gif">
            <iframe src={animalGifUrls[randomGifIndex]}
                width="100%"
                height="100%"
                frameBorder="0"
                className="giphy-embed" 
                title="Random Cute Animal Gif"
                allowFullScreen>
            </iframe>
        </div>
            );
}

export default GifRandomizer;