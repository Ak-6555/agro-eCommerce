/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../../axios/axiosInstance';

  
export interface User {
    name: string;
    email: string;
    password: string;
  }

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   // Check if user is logged in from localStorage
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     setUser(parsedUser);
  //     setIsAdmin(parsedUser.role === 'admin');
  //   }
  //   setLoading(false);
  // }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/user/login', {
        email,
        password,
      });

      console.log(response);
  
      // const { access_token, user } = response.data;
  
      // if (access_token && user) {
      //   // Save token and user info
      //   localStorage.setItem('access_token', access_token);
      //   localStorage.setItem('user', JSON.stringify(user));
  
      //   setUser(user);
      //   setIsAdmin(user.role === 'admin');
  
      //   return true;
      // }
  
      return true;
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/user/signup', {
        name,
        email,
        password,
      });
  
      //const user: User = response.data.user; // Adjust based on your API response structure
       console.log(response);
      // Auto login or update local state
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
  
      return true;
    } catch (error: any) {
      console.error('Signup error:', error.response?.data || error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};