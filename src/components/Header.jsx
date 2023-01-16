import React from "react";
import memeLogo from "../images/troll-face.png";

export default function Header() {
    return(
        <header className="header">
            <img src={memeLogo} alt="meme-icon" />
            <h1 className="header-title">Meme Generator</h1>
            <p>Add text to meme-ify the images!</p>
        </header>
    )
}