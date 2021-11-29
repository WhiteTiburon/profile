import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import Typed from "typed.js";

export default function AboutPage(){
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

    return(
    <>
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="../static/media/jonathan.8000b5d0.jpeg" alt=""/>
                </div>
                <div class="column right">
                    <div class="text">I'm Jonathan and I'm a <span ref={el}></span></div>
                    <p>Hello, my name is Jonathan and I am University of Colorado graduate. I obtained my masters degree in Computer Science with honors. During my time at UCCS I learned data structures, algorithms, and computer theory while also working on projects. My projects entailed everything from basic websites, web apps, video game platforms, and machine learning models.</p>
                    <Link to="#">Download CV</Link>
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
