import React from "react"
import memesData from "../memesData"

export default function Meme() {

    /**
 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }
    
    return (
        <main className="meme-container">
            <section className="form">
                <div className="text-inputs">
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder="Bottom text" />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼️ </button>
            </section>   
            <img className="meme-image"src={meme.randomImage} alt="meme" />           
        </main>
    )
}