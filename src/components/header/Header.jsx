import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/images/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <nav className={style.nav}>
      <Link to='/'>
        <img src={logo} alt='Argent Bank Logo' />
      </Link>
      <div>
        <Link to='signin' className={style.navItem}>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
