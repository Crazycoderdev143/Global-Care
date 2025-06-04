import React from 'react';

interface VerificationEmailProps {
  username: string;
  code: string;
}

const VerificationEmail: React.FC<VerificationEmailProps> = ({ username, code }) => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', fontFamily: 'Roboto, Verdana, sans-serif', padding: '20px' }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <h2>Hello {username},</h2>

        <p style={{ fontSize: '14px', lineHeight: '24px', margin: '16px 0' }}>
          Thank you for registering. Please use the following verification code to complete your registration:
        </p>

        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px 0' }}>
          {code}
        </p>

        <p style={{ fontSize: '14px', lineHeight: '24px', margin: '16px 0' }}>
          If you did not request this code, please ignore this email.
        </p>

        <a
          href="https://yourapp.com/verify"
          style={{
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify My Account
        </a>
      </div>
    </div>
  );
};

export default VerificationEmail;
