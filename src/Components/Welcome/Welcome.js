import React, { PureComponent, Fragment } from 'react'
import './Welcome.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

class Welcome extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="welcome">
                    <div className="welcome__inner">
                        <h3>Hi, I am <span>Harun Rashid</span></h3>
                        <p>Freelance Web Designer & Front-End Developer located in Bangladesh. Specialized in Creating Websites & Designing UI/UX. I love to play with colours and codes!</p>

                        <div className="social_links">
                            <a href="/"><FontAwesomeIcon icon={faFacebook} />  </a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} />  </a>
                            <a href="/"><FontAwesomeIcon icon={faGithub} />  </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Welcome