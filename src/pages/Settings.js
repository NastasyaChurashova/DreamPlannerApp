import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="settings">
      <h1>Settings</h1>

      <section>
        <h2>Profile Settings</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <button>Update Profile</button>
      </section>

      <section>
        <h2>Notification Preferences</h2>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={notifications.email}
            onChange={handleCheckboxChange}
          />
          Email reminders
        </label>
        <label>
          <input
            type="checkbox"
            name="push"
            checked={notifications.push}
            onChange={handleCheckboxChange}
          />
          Push notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="weekly"
            checked={notifications.weekly}
            onChange={handleCheckboxChange}
          />
          Weekly summary
        </label>
        <button>Save Preferences</button>
      </section>

      <section>
        <h2>Theme</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
        <button>Apply Theme</button>
      </section>

      <section>
        <h2>Language</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ru">Русский</option>
        </select>
        <button>Change Language</button>
      </section>

      <section>
        <h2>Account Security</h2>
        <button>Change Password</button>
        <button>Logout All Devices</button>
      </section>

      <section>
        <h2>Danger Zone</h2>
        <button className="danger">Delete Account</button>
      </section>
    </div>
  );
};

export default Settings;
