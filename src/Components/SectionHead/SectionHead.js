import React, {Component,Fragment} from 'react';
import './SectionHead.scss'

class SectionHead extends Component {
        render() {
                return (
                    <Fragment>
                        <div className="section-head">
                                <h3 className="section-heading">{this.props.sectionName}</h3>
                                <span className="section-heading-hidden">{this.props.sectionName}</span>
                        </div>
                    </Fragment>
                );
        }
}

export default SectionHead;