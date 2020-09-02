import React, {Component,Fragment} from 'react';
import './SectionSubHead.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

class SectionSubHead extends Component {
    render() {
        return (
            <Fragment>
                <div className="sub__head">
                    <span className="sub__Head__icon"> <FontAwesomeIcon icon={faBriefcase}/> </span>
                    <h3>Working Experience</h3>
                </div>

            </Fragment>
        );
    }
}

export default SectionSubHead;