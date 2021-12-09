import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                   
                <a  classname="navbar-a" href="#"><img className="navbar-logo" src="../../assets/LogoCasaCarina.svg" alt="" /></a>
                <a className="navbar-a" href="#"><h1 className="navbar-h1">Casa Carina</h1></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.path} className={item.cName} activeclassName="active">
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