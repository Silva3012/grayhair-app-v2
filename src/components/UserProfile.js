import React from 'react';
import '../styles/userProfile.css';

function UserProfile() {
    //Function to handle logout
  const handleLogout = () => {
    alert('User has logged out');
  }

  return (
    <div className='user-profile-container'>
      <h2>User Profile</h2>
      <p>Username: Silva92</p>
      <p>Email: silvano.n92@gmail.com</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;