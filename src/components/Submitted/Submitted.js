import React from 'react';
import axios from 'axios';
import './style.css';
import image from "./adglogo3.png";

const ama = () => {

    return (
        <div class="box">
            <img src={image}></img>
            <div class="askDoubt">
                <h1 class="title">Ask Your Doubts</h1>
                    <form>
                        <input class="name" id="name" type="text" placeholder="Your name"></input>
                        <br></br>
                        <input class="name" id="reg" type="text" placeholder="Registration number"></input>
                        <br></br>
                        <input class="name" id="email" type="text" placeholder="Email ID"></input>
                        <br></br>
                        <textarea class="doubt" id="doubts" placeholder="Your Doubts"></textarea>
                        <br></br>
                        <button class="button" onClick={(e)=>submit(e)}>Send</button>
                    </form>
            </div>
        </div>
        
    )
}

export default ama;