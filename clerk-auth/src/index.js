import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 
import App from './App';
import ProtectedPage from './ProtectedPage';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const ClerkWithRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" redirectUrl="/protected" />} />
      <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" redirectUrl="/protected" />} />
      <Route path="/protected" element={
        <SignedIn>
          <ProtectedPage />
        </SignedIn>
      } />
      <Route path="/protected" element={
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      } />
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <ClerkWithRoutes />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);