import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import navLogo from '../../assets/LogoCasaCarina.svg'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <Link to="/">
                    <img className="navbar-logo" src={navLogo} alt="adsad"/>
                </Link>
                <Link to="/" className="navbar-a">
                    <h1 className="navbar-h1">Casa Carina</h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.path} className={item.cName} activeclassname="active">
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;