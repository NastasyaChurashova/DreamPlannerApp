import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <Calendar />
      </main>
    </div>
  );
};

export default Dashboard;
