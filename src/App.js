import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MyAccount from "./pages/MyAccount";
import CreateEventPage from "./pages/CreateEventPage";  
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/create-event" element={<CreateEventPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
