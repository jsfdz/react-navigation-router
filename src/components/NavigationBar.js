import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <header>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/faq'>F.A.Q.</NavLink>
                <NavLink to='/store'>Store</NavLink>
            </nav>
        </header>
    )
}