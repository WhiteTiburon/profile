import React from 'react';

const Services = () => (
    <>
      <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">My services</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Web Design</div>
                        <p>Waiting to update info.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Advertising</div>
                        <p>Waiting to update info.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Apps Design</div>
                        <p>Waiting to update info.</p>
                    </div>
                </div>
               </div>
            </div>
      </section>

        <footer>
            <span>Created By <a href="https://www.jonatech.com">Jonatech</a> | <span
                className="far fa-copyright"></span> 2021 All rights reserved.</span>
        </footer>
        <script src="script.js"></script>
    </>
)
export default Services;