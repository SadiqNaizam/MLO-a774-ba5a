import React from 'react';
import AuthCard from '../components/Auth/AuthCard';

/**
 * LoginPage Component
 *
 * This component serves as the main login page for the application.
 * It utilizes the LoginLayout pattern by centering the AuthCard component
 * on a full-screen background.
 *
 * As per the component hierarchy:
 * - Page: LoginPage
 * - Template: LoginLayout (implicitly implemented here)
 * - Organism: AuthCard
 *
 * Layout Requirements:
 * - Overall layout: Flexbox, centered items, minimum screen height, background color.
 *   (className="flex items-center justify-center min-h-screen bg-background")
 * - The AuthCard component itself handles its specific sizing, padding, and background.
 */
const LoginPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <AuthCard />
    </main>
  );
};

export default LoginPage;
