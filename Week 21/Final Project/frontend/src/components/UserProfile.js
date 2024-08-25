// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as common from './common.js';
import './styles.css';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Token ${token}` }
      };
      try {
        const response = await axios.get(common.backend_url + 'api/user-profile/', config);
        setProfile(response.data);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
        setAvatar(response.data.avatar || ''); // Use empty string if avatar is null
      } catch (error) {
        setError('Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Token ${token}` }
    };
    try {
      await axios.put(common.backend_url + 'api/user-profile/', { username, email, password, avatar }, config);
      setError('');
      alert('Profile updated successfully');
    } catch (error) {
      setError('Error updating profile');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Avatar:
        <select value={avatar} onChange={(e) => setAvatar(e.target.value)}>
          <option value="">Select an avatar</option>
          <option value="C:\Users\DaveN\OneDrive\Desktop\Final Project\Final Project\frontend\src\components\img\avatar 1.jpg">Avatar 1</option>
          <option value="C:\Users\DaveN\OneDrive\Desktop\Final Project\Final Project\frontend\src\components\img\avatar 2.jpg">Avatar 2</option>
          <option value="C:\Users\DaveN\OneDrive\Desktop\Final Project\Final Project\frontend\src\components\img\avatar 3.jpg">Avatar 3</option>
        </select>
      </label>
      <button onClick={handleUpdate} className="start-button">Update Profile</button>
    </div>
  );
};

export default UserProfile;
