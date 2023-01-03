import React from "react"

export default function Meme() {
    return (
        <section className="form">
            <div className="text-inputs">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="Bottom text" />
            </div>
            <button>Get a new meme image 🖼️ </button>
        </section>
    )
}