// AuthContext.jsx
import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Función para hacer login
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: res.data.user,
          token: res.data.token,
        },
      });

      // Guardar token en localStorage para persistencia
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: error.response?.data?.message || 'Error al iniciar sesión',
      });
    }
  };

  // Función para hacer logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
