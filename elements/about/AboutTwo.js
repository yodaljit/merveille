import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/about-1.png"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-golden">Corporate About.</span>
                  </h4>
                  <h2 className="title mt--10">About Our Business.</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    We at believe that every step we take stems from our passion
                    for achieving excellence .. We believe that long-term
                    business relationships based on mutual trust and ethical
                    business practices are the basis of success.
                  </p>

                  <p>
                    <b className="theme-golden">Our Vision</b><br/>
                    <span>&nbsp;&nbsp; - To be at the core of a positive impact in every business.</span>
                  </p>
                  <p>
                    <b className="theme-golden">Our Mission</b><br/>
                    <span>&nbsp;&nbsp; - To provide all Services safely, efficiently and deliver them
beyond expectations of customers.</span>
                  </p>

                  <p>
                    <b className="theme-golden">Our Core Values</b><br/>
                    <span>&nbsp;&nbsp; - Integrity</span><br/>
                    <span>&nbsp;&nbsp; - Respect for all people</span><br/>
                    <span>&nbsp;&nbsp; - Ethical Conduct</span><br/>
                    <span>&nbsp;&nbsp; - Innovation</span><br/>
                    <span>&nbsp;&nbsp; - Excellence</span><br/>
                  </p>

                  
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link className="btn-golden btn-icon" href="/aboutUs">
                      More About Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
