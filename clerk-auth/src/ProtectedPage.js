import { UserButton, SignedIn } from '@clerk/clerk-react';

import React from 'react';

const ProtectedPage = () => {
  return (
    <SignedIn>
      <div className="protected-container">
        <h1 className="protected-title">Protected Page</h1>
        <p className="protected-description">This page is protected and only accessible to signed-in users.</p>
        <UserButton />
      </div>
    </SignedIn>
  );
};

export default ProtectedPage;