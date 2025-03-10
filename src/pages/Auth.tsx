
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const Auth = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-background p-4"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 text-gradient">Sync Tube Party</h1>
        <p className="text-muted-foreground">Watch YouTube videos with friends in real-time</p>
      </motion.div>

      <AuthForm />
    </div>
  );
};

export default Auth;
