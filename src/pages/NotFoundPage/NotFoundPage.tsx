import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import { NOT_FOUND_PAGE } from '../../common';

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
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{NOT_FOUND_PAGE.EMOJI}</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{NOT_FOUND_PAGE.ERROR_CODE}</h1>
      <h2 style={{ marginBottom: '1rem' }}>{NOT_FOUND_PAGE.TITLE}</h2>
      <p style={{ marginBottom: '2rem', color: '#7F8C8D' }}>
        {NOT_FOUND_PAGE.MESSAGE}
      </p>
      <Link to="/">
        <Button variant="primary" size="large">
          {NOT_FOUND_PAGE.BUTTON}
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;