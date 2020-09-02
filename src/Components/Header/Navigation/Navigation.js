import React, { PureComponent, Fragment } from 'react';
import './Navigation.scss'

class Navigation extends PureComponent {
    

    render() {
        return (
            <Fragment>
                <div className="navigation">
                    <div className="navigation__inner">
                        <a href="/">home</a>
                        <a href="/">about</a>
                        <a href="/">portfolios</a>
                        <a href="/">skills</a>
                        <a href="/">resume</a>
                        <a href="/">blogs</a>
                        <a href="/">contact</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navigation