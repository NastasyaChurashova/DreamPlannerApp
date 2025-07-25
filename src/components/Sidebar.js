import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import calendarIcon from "../assets/icons/calendar.svg";
import myAccountIcon from "../assets/icons/my_account.svg";
import createEventIcon from "../assets/icons/create_event.svg";
import analyticsIcon from "../assets/icons/analytics.svg";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Применяем класс 'open' только если isMobile === true
	const sidebarClass = `sidebar ${isMobile && isOpen ? "open" : ""} ${!isMobile ? "desktop" : ""}`;

	return (
		<aside className={sidebarClass}>
			{isMobile && (
				<button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
					<svg viewBox="0 0 24 24" width="24" height="24">
						<line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="2" />
						<line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="2" />
					</svg>
				</button>
			)}

			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							onClick={isMobile ? toggleSidebar : null}
							className={({ isActive }) => (isActive ? "active" : "")}>
							<img src={calendarIcon} alt="Calendar" className="icon" />
							CALENDAR
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/my-account"
							onClick={isMobile ? toggleSidebar : null}
							className={({ isActive }) => (isActive ? "active" : "")}>
							<img src={myAccountIcon} alt="My Account" className="icon" />
							MY ACCOUNT
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create-event"
							onClick={isMobile ? toggleSidebar : null}
							className={({ isActive }) => (isActive ? "active" : "")}>
							<img src={createEventIcon} alt="Create Event" className="icon" />
							CREATE EVENT
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/analytics"
							onClick={isMobile ? toggleSidebar : null}
							className={({ isActive }) => (isActive ? "active" : "")}>
							<img src={analyticsIcon} alt="Analytics" className="icon" />
							ANALYTICS
						</NavLink>
					</li>
				</ul>
			</nav>

			<footer className="sidebar-footer">
				<ul>
					<li>
						<NavLink to="/settings" onClick={isMobile ? toggleSidebar : null}>
							SETTINGS
						</NavLink>
					</li>
					<li>
						<NavLink to="/help-center" onClick={isMobile ? toggleSidebar : null}>
							HELP CENTER
						</NavLink>
					</li>
				</ul>
			</footer>
		</aside>
	);
};

export default Sidebar;
