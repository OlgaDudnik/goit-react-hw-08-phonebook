import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { ImAddressBook } from 'react-icons/im';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className="ListApp">
      <span>
        <ImAddressBook
          style={{
            marginRight: 10,
            marginLeft: 10,
            display: 'inline-block',
            padding: 15,
          }}
        />
      </span>

      {isLoggedIn && (
        <span>
          <NavLink
            className={({ isActive }) => (isActive ? 'ActiveLink' : 'Link')}
            to="/contacts"
          >
            My contacts
          </NavLink>
        </span>
      )}
    </header>
  );
};

export default Navigation;
