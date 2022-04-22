
import React, { useState, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"
import './movielogin.css';




const MovieLogin = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const UserLogin = async e => {
        try {

            e.preventDefault();

            const body = { email, password };
            const response = await fetch("https://mymovie123.herokuapp.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),

            });

            if (response.status == 200) {
                window.location = "/home";
            }
            else if (response.status == 404) {
                alert("User Not Found.");
            }

            else if (response.status == 401) {
                alert("Incorrect Password.");
            }
            else if (response.status == 500) {
                alert("Server Error.");
            }

            document.body.style.backgroundColor = "#222222";
        } catch (err) {
            console.error(err.message);
        }

    }



    return (
        <Fragment>
            <style> {document.body.style.backgroundColor = "#454545"} </style>
            <div class="panels">
                <div class="panel">
                    <img class="home-icon-image" src="https://media.discordapp.net/attachments/933832128708374638/966894860378460200/Screen_Shot_2022-04-21_at_10.54.49_PM.png?width=579&height=615" />
                </div>
                <div class="panel">




                    <form className="login-form" onSubmit={UserLogin}>
                        <img src="https://github.com/cwang5336/myMovie_FrontEnd/blob/main/MyMovie-logos.png?raw=true" />
                        <h1>Login</h1>

                        <h2>Username</h2>
                        <input type="text" class="input-style" placeholder="Username" />

                        <h2>Email</h2>
                        <input type="text" class="input-style" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <h2>Password</h2>
                        <input placeholder="Password" class="input-style" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <button type="submit" class="login-btn"> Login </button>

                        <h3>Don't have an account?  <Link to="/signup" >
                            Click Here
                        </Link></h3>


                    </form>

                </div>
            </div>

        </Fragment >

    )

}
export default MovieLogin;
