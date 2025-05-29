import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuthForm from './AuthForm';

interface AuthCardProps {
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-[400px] bg-card text-card-foreground shadow-md rounded-md p-6", className)}>
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <AuthForm />
      </CardContent>
    </Card>
  );
};

export default AuthCard;