import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout(props) {
    return (
        <div>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </div>
    );
}


export default Layout;