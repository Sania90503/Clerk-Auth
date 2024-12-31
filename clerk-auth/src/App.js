import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="content centered-box">
        <h1 className="title">Welcome to Clerk Auth</h1>
        <p className="description">Please sign in to access protected pages.</p>
        <a href="/sign-in" className="sign-in-link">
          Sign in
        </a>
      </div>
    </div>
  );
}

export default App;