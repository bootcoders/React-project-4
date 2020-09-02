import React, {Component,Fragment} from 'react';
import SectionHead from "../SectionHead/SectionHead";

class Resume extends Component {
    render() {
        return (
            <Fragment>
                <div className="resume__section padding-top">
                    <div className="container">
                        <SectionHead  sectionName="RESUME" />

                        <div className="resume__wrap">

                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Resume;