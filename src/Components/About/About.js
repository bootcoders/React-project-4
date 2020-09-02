import React, {Component, Fragment} from 'react';
import  './About.scss'
import SectionHead from "../SectionHead/SectionHead";
import about_img from './../../images/avatar.jpg';
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
class About extends Component {
        constructor(props) {
                super(props);
        }
        render() {
                return (
                    <Fragment>
                            <div className="about-area padding-top ">
                                    <div className="container">
                                            <SectionHead sectionName="about me" />

                                            <div className="flex_row">
                                                    <div className="about__img">
                                                            <img src={about_img} alt=""/>
                                                    </div>
                                                    <div className="about__desc">
                                                            <h3>I am <span>Devid Chester</span></h3>
                                                            <p>My name is Harun. I'm a Senior Front End Developer from Bangladesh. Specialized in Creating Websites & Designing UI/UX. I worked with many clients all over the world in the last 4 years. I love to play with colours and codes. It's not only my profession it's also my passion.</p>
                                                            <p>I'm always curious to create, to improvise, and to deliver the best design that fits with what user wants and needs. Hope my expertise will produce you a unique solution. so kindly get back to me with the complete specification :)</p>

                                                            <div className="about__info">
                                                                    <ul>
                                                                            <li><strong>Full Name</strong> Devid Chester</li>
                                                                            <li><strong>Age</strong> 24 Years</li>
                                                                            <li><strong>Nationality</strong> American</li>
                                                                            <li><strong>Languages</strong> English, French</li>
                                                                            <li><strong>Address</strong> 121 King Street, Melbourne, Australia</li>
                                                                            <li><strong>Freelance</strong> Available</li>

                                                                    </ul>
                                                            </div>
                                                            <div className="download_cv">
                                                                    <button type="button">DOWNLOAD CV</button>
                                                            </div>
                                                    </div>


                                            </div>

                                    </div>

                            </div>
                            <Services/>
                            <Reviews/>

                    </Fragment>
                );
        }
}

export default About;