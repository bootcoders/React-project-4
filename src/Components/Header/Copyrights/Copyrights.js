import React, { PureComponent, Fragment } from 'react'
import './Copyrights.scss'
class Copyrights extends PureComponent {

    render() {
        return (
            <Fragment>
                <div className="copyrights">
                    <p>&copy;  2015-2020. All Rights are Reserved.</p>
                </div>
            </Fragment>
        )
    }
}

export default Copyrights