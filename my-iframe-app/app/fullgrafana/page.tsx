import React from 'react';

const IframePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My Iframe Page</h1>
      <iframe 
        // src="http://10.115.11.28:3000/"
        src='http://localhost/grafana/login/'
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
