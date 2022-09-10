import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/styles.module.css';

const AuthNav = () => {
  return (
    <header className={s.ListApp}>
      <span className={s.ListItemApp}>
        <NavLink
          className={({ isActive }) => (isActive ? 'ActiveLink' : 'Link')}
          to="/register"
        >
          Registration
        </NavLink>
      </span>
      <span className={s.ItemNav}>
        <NavLink
          className={({ isActive }) => (isActive ? 'ActiveLink' : 'Link')}
          to="/login"
        >
          Log In
        </NavLink>
      </span>
    </header>
  );
};

export default AuthNav;
