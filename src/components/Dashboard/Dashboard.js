import React from 'react';
import DashNav from './DashNav';
import Profile from './Profile';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Dashboard;