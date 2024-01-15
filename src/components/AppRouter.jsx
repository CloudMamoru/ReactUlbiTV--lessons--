import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path='*' element={<Navigate to='/posts' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default AppRouter;
