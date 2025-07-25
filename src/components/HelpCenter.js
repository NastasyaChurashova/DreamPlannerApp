import React from "react";
import "../styles/HelpCenter.css";

const HelpCenter = () => {
	return (
		<div className="help-center">
			<h1>Help Center</h1>

			<section>
				<h2>1. How to Create an Event</h2>
				<ol>
					<li>Go to the Create Event page.</li>
					<li>Fill in the event name, date, start and end time.</li>
					<li>Add a description (optional).</li>
					<li>Click the "Create Event" button.</li>
				</ol>
			</section>

			<section>
				<h2>2. Calendar Usage</h2>
				<p>Click on a date to see events. Hover to view event previews. Red dots mean there are events.</p>
			</section>

			<section>
				<h2>3. Analytics Overview</h2>
				<p>Track how many meetings you’ve had and how much time you’ve spent.</p>
			</section>

			<section>
				<h2> FAQ</h2>
				<ul>
					<li>
						<strong>Why is my event not showing?</strong> Check that the date and time are correct.
					</li>
					<li>
						<strong>Can I edit or delete events?</strong> Editing is under development.
					</li>
				</ul>
			</section>

			<section>
				<h2>Technical Support</h2>
				<p>
					If you face issues, try refreshing the page or contact support at{" "}
					<a href="mailto:support@dreamplanner.app">support@dreamplanner.app</a>.
				</p>
			</section>
		</div>
	);
};

export default HelpCenter;
