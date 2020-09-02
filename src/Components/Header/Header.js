import React, { PureComponent, Fragment } from 'react'
import './Header.scss'
import Avatar from './Header_top/Header_top'
import Navigation from './Navigation/Navigation'
import Copyrights from './Copyrights/Copyrights'

class Header extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="header">
                   <Avatar/>
                   <Navigation/>
                   <Copyrights/>
                </div>

            </Fragment>
        
        )
    }
}

export default Header