import React from 'react'
import './style.css'

function Header(props) {
    return (
        <div>
            <header>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <p style={{textAlign: "center"}}>Meme Generator</p>
        </header>
        </div>
    )
}

export default Header


