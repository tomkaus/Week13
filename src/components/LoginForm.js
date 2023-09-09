import React, { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const currentDate = new Date().toLocaleString();

  const handleLogin = () => {
    // Add your login logic here
    setLoggedIn(true);
  };

  return (
    <div className="login-form">
      {loggedIn ? (
        <div>
          <h3 className="login-heading">Welcome, {name}!</h3>
          <p>You have successfully logged in.</p>
          <p>Current Date/Time: {currentDate}</p>
        </div>
      ) : (
        <div>
          <h3 className="login-heading">Log In</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: 'lightgray' }}
              placeholder="First Name" // Add the placeholder text here
            />
          </div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

