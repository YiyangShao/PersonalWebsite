import React from 'react';
import Navigation from './src/Navigation';
import { AuthKitProvider } from '@workos-inc/authkit-react';

/**
 * App Component
 * Root of the application, it initializes the navigation.
 */
export default function App() {
  return (
    <AuthKitProvider
      clientId="client_01J9F7DEMQMV5N1EPSTCK3BWM1"
      redirectUri={window.location.origin}  // Dynamic current URL
      onRedirectCallback={({ state }) => {
        if (state?.returnTo) {
          navigate(state.returnTo);
        }
      }}
    >
      <Navigation />
    </AuthKitProvider>
  );
}
