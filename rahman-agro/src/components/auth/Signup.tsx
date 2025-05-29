import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const success = await signup(name, email, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Email already exists');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)]  mt-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg sm:p-8">
        <div className="text-center mb-6">
        <h1 className="text-3xl font-[800] my-4 mb-8 text-gray-900">Create a  <span className='text-green-600'>new account</span></h1>
        
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              label="Full Name"
              type="text"
              id="name"
              name="name"
              placeholder='Enter full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User size={18} className="text-gray-400" />}
              required
              fullWidth
              autoComplete="name"
            />
          </div>

          <div>
            <Input
              label="Email address"
              type="email"
              id="email"
              name="email"
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={18} className="text-gray-400" />}
              required
              fullWidth
              autoComplete="email"
            />
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock size={18} className="text-gray-400" />}
              required
              fullWidth
              autoComplete="new-password"
            />
          </div>

          <div>
            <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Re-write your password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              leftIcon={<Lock size={18} className="text-gray-400" />}
              required
              fullWidth
              autoComplete="new-password"
            />
          </div>

          <Button
            variant='success'
            type="submit"
            isLoading={isLoading}
            fullWidth
          >
            Create Account
          </Button>
          <div>
          <p className=" text-sm mt-4 text-center text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
              sign in to your account
            </Link>
          </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignupPage;