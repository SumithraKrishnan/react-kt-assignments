import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div>
            <h4>Dashboard page</h4>
            <NavLink to="/dashboard/profile">Profile</NavLink>
      {" | "}
           <NavLink to="/dashboard/settings">Settings</NavLink>
            <Outlet/>
        </div>
    );
}

export default Dashboard;