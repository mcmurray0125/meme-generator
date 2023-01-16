import React, { useEffect } from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        return () => {

        }
    }, [])
    


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main className="meme-container">
            <section className="form">
                <div className="text-inputs">
                    <input type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange} />
                    <input type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼️ </button>
            </section>  
            <div className="meme">
                <img className="meme-image"src={meme.randomImage} alt="meme" />           
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div> 
        </main>
    )
}