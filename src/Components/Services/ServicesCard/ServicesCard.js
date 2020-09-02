import React, {Component,Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette} from '@fortawesome/free-solid-svg-icons'
import './ServicesCard.scss'
class ServicesCard extends Component {
        render() {
                return (
                    <Fragment>
                        <div className="service__card">
                                <div className="service__icon">
                                        <FontAwesomeIcon icon={faPalette} />
                                </div>
                                <div className="service__heading">
                                        <h3>Web Design</h3>
                                </div>
                                <div className="service__desc">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                                </div>
                        </div>
                    </Fragment>
                );
        }
}

export default ServicesCard;