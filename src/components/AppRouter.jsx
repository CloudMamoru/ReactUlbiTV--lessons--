import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes/routes';

const AppRouter = () => {
  const isAuth = true;

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route path='*' element={<Navigate to='/posts' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default AppRouter;
