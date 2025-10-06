import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us! Contact form and company information coming soon.</p>
      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <p><strong>Address:</strong> House-10, Road-5, Block-B, Rampura, Banasree, Dhaka-1219, Bangladesh</p>
        <p><strong>Phone:</strong> +880 1328990900</p>
        <p><strong>Email:</strong> sales.vertex23@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactPage;