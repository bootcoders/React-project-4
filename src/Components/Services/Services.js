import React, {Component,Fragment} from 'react';
import SectionHead from "../SectionHead/SectionHead";
import ServicesCard from "./ServicesCard/ServicesCard";
import './Services.scss'
class Services extends Component {
        render() {
                return (
                    <Fragment>
                            <div className="services__area padding-top">
                                    <div className="container">
                                            <SectionHead sectionName="Services" />

                                            <div className="flex_row">
                                                    <ServicesCard/>
                                                    <ServicesCard/>
                                                    <ServicesCard/>
                                            </div>
                                    </div>
                            </div>
                    </Fragment>
                );
        }
}

export default Services;