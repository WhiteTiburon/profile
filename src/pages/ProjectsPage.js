import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


const ProjectsPage = ()=>(
    <>
     <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title">Projects</h2>
            <div className="carousel">
                <OwlCarousel items={3} className="owl-carousel" margin={20} autoplay={true} nav={false} dots={true} >
                 <div className="card">
                    <div className="box">
                        <img src="../static/media/jonathan.8000b5d0.jpeg" alt="" width="150" height="100"/>
                            <div className="text">First project</div>
                            <p>Waiting to update info</p>
                    </div>
                 </div>
                <div className="card">
                    <div className="box">
                        <img src="../static/media/jonathan.8000b5d0.jpeg" alt="" width="150" height="100"/>
                            <div className="text">Second Project</div>
                            <p>Waiting to update info.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="../static/media/jonathan.8000b5d0.jpeg" alt="" width="150" height="100"/>
                            <div className="text">Third Project</div>
                            <p>Waiting to update info.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="../static/media/jonathan.8000b5d0.jpeg" alt="" width="150" height="100"/>
                            <div className="text">Fourth Project</div>
                            <p>Waiting to update info</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="../static/media/jonathan.8000b5d0.jpeg" alt="" width="150" height="100"/>
                            <div className="text">Fifth Project</div>
                            <p>Waiting to update info.</p>
                    </div>
                </div>
                 </OwlCarousel>
            </div>
        </div>
     </section>

        <footer>
            <span>Created By <a href="https://www.jonatech.com">Jonatech</a> | <span
                className="far fa-copyright"></span> 2021 All rights reserved.</span>
        </footer>

    </>
)
export default ProjectsPage;