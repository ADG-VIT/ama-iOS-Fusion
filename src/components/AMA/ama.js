import React from 'react';
import axios from 'axios';
import './style.css';

const ama = () => {

    const submit = async (e) => {
        e.preventDefault();
        console.log(document.getElementById("name").value);
        let info ={
            "name": document.getElementById("name").value,
            "regno": document.getElementById("reg").value,
            "email": document.getElementById("email").value,
            "message": document.getElementById("doubts").value
        }

        let data = await axios.post('https://ama-iosfusion.herokuapp.com/savedata', info);
        console.log(data);
    } 

    return (
        <div class="box">
            <div class="askDoubt">
            <h1 class="title">Ask your doubts</h1>
                <form>
                    <input class="name" id="name" type="text" placeholder="Your name"></input>
                    <br></br>
                    <input class="name" id="reg" type="text" placeholder="Registration number"></input>
                    <br></br>
                    <input class="name" id="email" type="text" placeholder="Email ID"></input>
                    <br></br>
                    <textarea class="doubt" id="doubts" placeholder="Your Doubts"></textarea>
                    <br></br>
                    <button onClick={(e)=>submit(e)}>Send</button>
                </form>
            </div>
        </div>
        
    )
}

export default ama;