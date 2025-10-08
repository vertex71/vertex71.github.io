import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';

const NotFoundPage = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column' 
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🦷</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#7F8C8D' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="large">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;