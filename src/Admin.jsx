import React, { useState } from 'react';


const Admin = () => {
  const [user, setUser] = useState(''); // Corrected setuser to setUser
  const [password, setPassword] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [loading , setloading] = useState(false);

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    
    try {
      const response = await fetch('https://btcbackend-lvxj.onrender.com/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),  // Corrected user,password to { user, password }
      });

      // Fetching HTML content as text since backend sends HTML
      const data = await response.text();
      setHtmlContent(data); // Set the fetched HTML content to state
      setloading(false);
    } catch (error) {
      console.error('Error registering user:', error);
      setloading(false);
    }
  };

  return (
    <>
      <h1>Admin Page</h1>
      <br />

      <form onSubmit={handleSubmit} style={{ display: htmlContent ? 'none' : 'block'}}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">User</label> {/* Updated 'for' to 'htmlFor' */}
          <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}  // Updated 'setuser' to 'setUser'
            className="form-control"
            id="user"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="password"
          />
        </div>
        {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className="btn btn-primary">Submit</button>
                )}
        </form>

      {/* Render the HTML content returned from the server */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
};

export default Admin;
