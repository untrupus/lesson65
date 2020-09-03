import React from 'react';
import {NavLink} from "react-router-dom";
import Pages from '../../Pages';
import './Toolbar.css';

const Toolbar = () => {
    const links = Pages.map(page => (
        <li key={page.id}>
            <NavLink to={/pages/ + page.id}
                     className="navLink"
                     activeStyle={{
                         fontWeight: "bold",
                     }}
            >{page.title}</NavLink></li>
    ));

    return (
        <header className="Toolbar">
            <div>
                <h1>Static Pages</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    {links}
                    <li>
                        <NavLink to='/pages/admin'
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                 }}
                        >Admin</NavLink></li>
                </ul>

            </nav>
        </header>
    )
}

export default Toolbar;