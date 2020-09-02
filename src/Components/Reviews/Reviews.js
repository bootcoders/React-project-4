import React, {Component, Fragment} from 'react';
import SectionHead from "../SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard/ReviewCard";
class Reviews extends Component {

        render() {
                let settings = {
                        dots: false,
                        arrows:false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay:true,
                        easing:'linear'
                };
                return (
                    <Fragment>
                        <div className="reviews_section padding-top margin-bottom">
                                <div className="container">
                                        <SectionHead sectionName="Reviews"/>

                                        <div className="Owl_slider">
                                                <Slider {...settings}>
                                                        <ReviewCard/>
                                                        <ReviewCard/>
                                                        <ReviewCard/>
                                                        <ReviewCard/>
                                                        <ReviewCard/>
                                                </Slider>
                                        </div>

                                </div>
                        </div>

                    </Fragment>
                );
        }
}

export default Reviews;