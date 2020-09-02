import React, {Component,Fragment} from 'react';
import {ProgressBarLine} from 'react-progressbar-line'
import './SkilsCard.scss'
class SkilsCard extends Component {
        render() {
                return (
                    <Fragment>
                            <div className="skill_card">
                                    <ProgressBarLine
                                        value={this.props.skillValue}
                                        min={0}
                                        max={100}
                                        strokeWidth={1}
                                        trailWidth={0.5}
                                        text={this.props.skillName}
                                        styles={{
                                                path: {
                                                        stroke: '#fff'
                                                },
                                                trail: {
                                                        stroke: '#0C76AA'
                                                },
                                                text:{
                                                        textAlign:'left',
                                                        fontSize:'15px',
                                                        letterSpacing:'2px'
                                                }
                                        }}
                                    />

                            </div>
                    </Fragment>
                );
        }
}

export default SkilsCard;