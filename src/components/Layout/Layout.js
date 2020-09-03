import React from 'react';
import Toolbar from "../Toolbar/Toolbar";
import './Layout.css';

const Layout = props => {
    return (
        <div className="Layout">
            <Toolbar/>
            <main className="LayoutContent">
                {props.children}
            </main>
        </div>
    );
};

export default Layout;