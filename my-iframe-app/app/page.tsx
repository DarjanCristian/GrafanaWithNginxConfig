import React from 'react';

const IframePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My Iframe Page</h1>
      <iframe 
        src="http://dev-poc-durr.accesa.eu:3000/dashboard/snapshot/cFP53sUnp2heQ62HjZrtJwLj6XR35RZH" 
        width="1600" 
        height="1000" 
        style={{ border: 'none' }}
        title="Example Iframe"
        allowFullScreen
      />
    </div>
  );
};

export default IframePage;
