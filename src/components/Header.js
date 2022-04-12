import React from 'react';
import './Header.css';
import Netflixlogo from './img/netflixlogo.png';
import Netflixuser from './img/netflixuser.png';



export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Netflixlogo} alt="Netflix-logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={Netflixuser} alt="Netflix-user"/>
                </a>
            </div>
        </header>
    );
}