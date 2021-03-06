import React, { Component } from 'react'

class StripedList extends Component {


    render() {

        const { children, style } = this.props

        return(
            <React.Fragment>
                {
                    React.Children.map(children, (child, key) => {
                        return React.cloneElement(child, { style: style });
                    })
                }
            </React.Fragment>
        )
    }

}

export default StripedList