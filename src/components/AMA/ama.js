import React from 'react';
import axios from 'axios';
import './style.css';

const ama = () => {

    const submit = () => {
        axios.post()
    } 

    return (
        <div class="box">
            <div class="askDoubt">
            <h1 class="title">Ask your doubts</h1>
                <form>
                    <input class="name" type="text" placeholder="Your name"></input>
                    <br></br>
                    <input class="name" type="text" placeholder="Registration number"></input>
                    <br></br>
                    <input class="name" type="text" placeholder="Email ID"></input>
                    <br></br>
                    <textarea class="doubt" placeholder="Your Doubts"></textarea>
                    <br></br>
                </form>
            </div>
        </div>
        
    )
}

export default ama;