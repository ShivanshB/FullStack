import React from "react";

const Button = (props) => {
    return (
    <div>
        <h1>{props.title}</h1>
        <button>{props.text}</button>
    </div>
    )
}

export default Button