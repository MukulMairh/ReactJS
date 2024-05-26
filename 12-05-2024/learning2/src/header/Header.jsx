import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/user">User</Link> |
            <Link to="/cities">Cities</Link>

        </div>
    )
}

export default Header
