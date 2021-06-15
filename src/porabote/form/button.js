import React from 'react'

const Button = props => {


    const state = {
        formValid : true,
        className: 'on-button grey-stroke_x_yellow-fill icon-login-auth__grey_x_white'
    }

    const inputType = props.type || 'text'
    const className = (props.className) ? '' : 'on-button grey-stroke_x_yellow-fill icon-login-auth__grey_x_white'
    const htmlFor = `btn-${Math.random()}`

    return (
        <button
            id={htmlFor}
            className={className}
            type={inputType}
            style={props.style}
            {...props}
            disabled={!state.formValid}
            >
            {props.text}
        </button>
    )

}

export default Button