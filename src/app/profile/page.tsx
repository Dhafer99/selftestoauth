// Profile.tsx
"use client";

import { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
    telephone: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('userInfo');
    if (savedData) {
      setUserInfo(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert('Profile updated successfully');
  };

  return (
    <div className="container">
      <div className="profile-card">
        <h2 className="title">Modify Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom: </label>
            <input
              type="text"
              name="nom"
              value={userInfo.nom}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Prénom: </label>
            <input
              type="text"
              name="prenom"
              value={userInfo.prenom}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Date de Naissance: </label>
            <input
              type="date"
              name="dateNaissance"
              value={userInfo.dateNaissance}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Adresse: </label>
            <input
              type="text"
              name="adresse"
              value={userInfo.adresse}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Téléphone: </label>
            <input
              type="text"
              name="telephone"
              value={userInfo.telephone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
