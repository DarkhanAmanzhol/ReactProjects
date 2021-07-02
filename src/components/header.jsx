import React, { Component } from 'react';
import logo from './../logo.svg';
//import './../App.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <header>
            <div className="logo"> 
                <img src={logo} alt="" />

                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
             </div>
        </header>
        );
    }
}
 
export default Header;