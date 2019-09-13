import React from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import './style.css';
import image from "./adglogo3.png";

const ama = () => {

    const success = () => {
        document.getElementById("title").style.color="white";
    }

    const submit = async (e) => {
        
        try {
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

            document.getElementById("name").value="";
            document.getElementById("reg").value="";
            document.getElementById("email").value="";
            document.getElementById("doubts").value="";

            document.getElementById("title").style.color="rgb(0, 223, 0)";
            setTimeout(success, 2000);
        } catch {
            document.getElementById("title").style.color="red";
            setTimeout(success, 2000);
        }
        

        
    } 

    return (
        <div class="box">
            <img src={image}></img>
            <div class="askDoubt">
                <h1 class="title" id="title">Ask Your Doubts</h1>
                    <form>
                        <input class="name" id="name" type="text" placeholder="Your name"></input>
                        <br></br>
                        <input class="name" id="reg" type="text" placeholder="Registration number"></input>
                        <br></br>
                        <input class="name" id="email" type="text" placeholder="Email ID"></input>
                        <br></br>
                        <textarea class="doubt" id="doubts" placeholder="Your Doubts"></textarea>
                        <br></br>
                        <button class="button" onClick={(e)=>submit(e)}><Link class="gg" to="/">Send</Link></button>
                    </form>
            </div>
        </div>
        
    )
}

export default ama;