import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const Login = (email, password) => {
    return post('/users/login', {
      user: { email, password },
    });
  };