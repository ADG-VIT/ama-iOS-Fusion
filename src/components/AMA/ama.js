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
                "regno": "19DUMMY69",
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
            {/* <img src={image}></img> */}
            <h1>Anokha a NGO</h1>
            <div class="askDoubt">
                <h1 class="title" id="title">Call for Volunteers</h1>
                    <form>
                        <input class="name" id="name" type="text" placeholder="Your name"></input>
                        <br></br>
                        <input class="name" id="reg" type="text" placeholder="Phone Number"></input>
                        <br></br>
                        <input class="name" id="email" type="text" placeholder="Email ID"></input>
                        <br></br>
                        <textarea class="doubt" id="doubts" placeholder="Any Messages"></textarea>
                        <br></br>
                        <button class="button" onClick={(e)=>submit(e)}><Link class="gg" to="/">Submit</Link></button>
                    </form>
            </div>
            <footer>&copy; Copyright of IWP <br></br>Developed By Kaustav Tamuly</footer>
        </div>
        
    )
}

export default ama;