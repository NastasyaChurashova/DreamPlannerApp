import React from 'react';
import '../styles/MyAccount.css';

const MyAccount = () => {
  return (
    <div className="my-account">
      <h1 className="page-title">MY ACCOUNT</h1>
      <form className="account-form">
        <label>
          Name
          <input type="text" placeholder="e.g. Nastasya Churashova" />
        </label>
        <label>
          Username
          <input type="text" placeholder="e.g. Nastasya_C" />
        </label>
        <label>
          Email Address
          <input type="email" placeholder="e.g. nastasya@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="e.g. 8343lhgjf_0071$@#" />
        </label>
        <label>
          Reenter Password
          <input type="password" placeholder="e.g. 8343lhgjf_0071$@#" />
        </label>
        <label>
          Country
          <select>
            <option>Russia</option>
            <option>USA</option>
            <option>Germany</option>
            <option>France</option>
            <option>Spain</option>
          </select>
        </label>
        <div className="form-footer">
          <button type="submit" className="btn">CONTINUE</button>
          <label>
            <input type="checkbox" />
            Remember me!
          </label>
        </div>
      </form>
    </div>
  );
};

export default MyAccount;
