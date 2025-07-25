import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MyAccount from "./pages/MyAccount";
import CreateEventPage from "./pages/CreateEventPage";
import "./styles/global.css";
import { useEvents, EventProvider } from "./context/EventContext";
import Analytics from "./pages/Analytics";
import HelpCenter from "./components/HelpCenter";
import Settings from "./pages/Settings";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<EventProvider>
			<Router>
				<div className="App">
					<Header />
					<div className="layout">
						<Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />

						<div className="content">
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/my-account" element={<MyAccount />} />
								<Route path="/create-event" element={<CreateEventPage />} />
								<Route path="/analytics" element={<Analytics />} />
								<Route path="/settings" element={<Settings />} />
								<Route path="/help-center" element={<HelpCenter />} />
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</EventProvider>
	);
}

export default App;
