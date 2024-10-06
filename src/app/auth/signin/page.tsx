// pages/auth/signin.tsx
"use client";

import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const SignInPage = () => {
  const [canAuthenticate, setCanAuthenticate] = useState(false);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Check if the user is within 50 km of Paris
        const distanceFromParis = haversineDistance(latitude, longitude, 48.8566, 2.3522); // Paris coordinates
        if (distanceFromParis >= 50) {
          setCanAuthenticate(true);
        } else {
          alert('You must be within 50 km of Paris to sign in.');
        }
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  // Haversine function for distance calculation
  const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

 const handleSignIn = () => {
    if (canAuthenticate) {
      signIn('google', { callbackUrl: '/client' }); // Redirect to /profile after successful Google sign-in
    }
  };

  const handleSignInGithub = () => {
    if (canAuthenticate) {
      signIn('github', { callbackUrl: '/client' }); // Redirect to /profile after successful GitHub sign-in
    }
  };

  return (
    <div className="container">
      <div className="signin-card">
        <h1 className="title">Sign In</h1>
        <p className="description">You must be within 50 km of Paris to sign in.</p>
        <p className="description">You have to sign in to navigate to other pages</p>
        <button
          onClick={handleSignIn}
          disabled={!canAuthenticate}
          className={`signin-btn ${canAuthenticate ? 'active' : 'disabled'}`}
        >
          Sign in with Google
        </button>
        
        <button
          onClick={handleSignInGithub}
          disabled={!canAuthenticate}
          className={`signin-btn ${canAuthenticate ? 'active' : 'disabled'}`}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
