import React, { Component } from 'react'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link className='logo' to='/'>
                            <img src={logo} alt='Library logo' />
                            <h1>E-Library</h1>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/' onClick={this.handleToggle}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={this.handleToggle}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
