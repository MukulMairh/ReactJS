import React, { useContext } from 'react'
import { ThemeContext } from '../App'


function Button({ children, ...props }) {
    // console.log(props);
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button className={`button-${theme}`} {...props}>{children}</button>
        </div>
    )
}

export default Button
