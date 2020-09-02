import React, { PureComponent, Fragment } from 'react'
import './Header_top.scss'
import  Avatar from './../../../images/avatar-2.jpg'
class Header_top extends PureComponent {
    

    render() {
        return (
            <Fragment>
                <div className="header__head">
                    <div className="avatar">
                        <a href="/"><img src={Avatar} alt="Avatar"/></a>
                    </div>
                    <div className="user__info">
                        <h3>Harun Rashid</h3>
                        <span>Freelance Web Developer</span>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

export default Header_top