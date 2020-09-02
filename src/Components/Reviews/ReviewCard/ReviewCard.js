import React, {Component,Fragment} from 'react';
import './ReviewCard.scss'
class ReviewCard extends Component {
        render() {
                return (
                    <Fragment>
                        <div className="review__card">
                                <div className="review__card--quote">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta ducimus incidunt! Asperiores at, maxime. Consequatur libero perspiciatis quia ratione.</p>
                                </div>
                                <div className="review__card--author">
                                        <h3>Harun Rashid</h3>
                                        <span>Web Designer</span>
                                </div>
                        </div>
                    </Fragment>
                );
        }
}

export default ReviewCard;