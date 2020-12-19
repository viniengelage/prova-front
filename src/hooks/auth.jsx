import React, { createContext, useCallback, useContext, useState } from 'react';
import { auth } from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
    //const user = localStorage.getItem('user');
    //const role = localStorage.getItem('role');
    auth.defaults.headers.authorization = `Bearer ${token}`;

    auth.defaults.headers.common['Content-Type']='application/json';
    auth.defaults.headers.common['Accept']='application/json';

    // if (access_token && user && role) {
    //   return { access_token, user: JSON.parse(user), role };
    // }

    if(token){
      return token;
    }

  });

  const signIn = useCallback(async ({ email, password }) => {
    setData('');
    
    localStorage.removeItem('token');
    //localStorage.removeItem('user');
    // localStorage.removeItem('role');


    const response = await auth.post('/sessions', {
      email,
      password
    });

    const { token } = response.data;
    auth.defaults.headers.authorization = `Bearer ${token}`;
    auth.defaults.headers.common['Content-Type']='application/json';
    auth.defaults.headers.common['Accept']='application/json';
    // const user = responseMe.data[0];
    // const role = responseMe.data[1].role;

    localStorage.setItem('token', token);
    // localStorage.setItem('@AgoraTem:role', role);
    // localStorage.setItem('@AgoraTem:user', JSON.stringify(user));

    // setData({ access_token, user, role });
    setData(token)
  }, []);

  const signOut = useCallback(async() => {
    // await auth.post('/auth/logout');

    localStorage.removeItem('access_token');
    // localStorage.removeItem('@AgoraTem:user');
    // localStorage.removeItem('@AgoraTem:role');

    setData('');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data,
        // user: data.user,
        // role: data.role,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
