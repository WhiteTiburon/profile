import React, {useEffect, useRef} from 'react';
import NavBar from "../NavBar";
import {Link} from "react-router-dom";
import Typed from "typed.js";

export default function HomePage() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Developer", "Freelancer", "Designer","Traveler"], // Strings to display
            // Speed settings, try different values until you get good results
            loop: true,
            typeSpeed: 100,
            backSpeed: 60,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <NavBar/>

            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-1">Hello, my name is</div>
                        <div class="text-2">Jonathan Contreras</div>
                        <div class="text-3">And I'm a <span ref={el}></span></div>
                        <Link to="#contact">Hire me</Link>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>If you have any questions feel free to send me an email!</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Jonathan Contreras</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Colorado Springs, CO</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">jon4ctr@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" required/>
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" required/>
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
            <span>Created By <a href="https://www.jonatech.com">Jonatech</a> | <span
                className="far fa-copyright"></span> 2021 All rights reserved.</span>
            </footer>
        </>
    );
}
