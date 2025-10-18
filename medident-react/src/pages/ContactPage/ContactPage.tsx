import React from 'react';
import { CONTACT_PAGE } from '../../common';

const ContactPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>{CONTACT_PAGE.TITLE}</h1>
      <p>{CONTACT_PAGE.MESSAGE}</p>
      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <p><strong>{CONTACT_PAGE.CONTACT_INFO.ADDRESS_LABEL}</strong> {CONTACT_PAGE.CONTACT_INFO.ADDRESS}</p>
        <p><strong>{CONTACT_PAGE.CONTACT_INFO.PHONE_LABEL}</strong> {CONTACT_PAGE.CONTACT_INFO.PHONE}</p>
        <p><strong>{CONTACT_PAGE.CONTACT_INFO.EMAIL_LABEL}</strong> {CONTACT_PAGE.CONTACT_INFO.EMAIL}</p>
      </div>
    </div>
  );
};

export default ContactPage;