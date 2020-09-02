import React, {Component,Fragment} from 'react';
import SkilsCard from "./SkilsCard/SkilsCard";
import SectionHead from "../SectionHead/SectionHead";
import  './Skills.scss'
class Skills extends Component {
        render() {
                return (
                    <Fragment>
                        <div className="skills-area padding-top">
                                <div className="container">
                                        <SectionHead sectionName="skills" />
                                        <div className="flex_row">
                                                <div className="skill-col">
                                                        <SkilsCard skillValue={50} skillName="html"/>
                                                        <SkilsCard skillValue={60} skillName="css"/>
                                                </div>
                                                <div className="skill-col">
                                                        <SkilsCard skillValue={70} skillName="html"/>
                                                        <SkilsCard skillValue={10} skillName="css"/>
                                                </div>
                                        </div>

                                </div>
                        </div>
                    </Fragment>
                );
        }
}

export default Skills;