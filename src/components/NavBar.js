import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navigation'>
            <nav>
                <h4>Lambda Eats</h4>
                <div className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
            </nav>
        </div>
    )
}
