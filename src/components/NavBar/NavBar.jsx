import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.icon} >
        <i className='fa fa-tasks'></i>
      </Link>
      <ul className={styles.navbarLinks}>
        <li>
          <NavLink
            className={({isActive}) => (isActive ? styles.linkActive : undefined)}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => (isActive ? styles.linkActive : undefined)}
            to='/important'
          >
            Important
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
