import React from 'react';
import { Link } from 'react-router';
import S_S_ from './header.scss';

const Header = () => {
  return (
    <header className={S_S_.header}>
      <ul>
        <li><Link to='/index' activeClassName={S_S_.active}>签到</Link></li>
        <li><Link to='/search' activeClassName={S_S_.active}>搜索</Link></li>
        <li><Link to='/meta' activeClassName={S_S_.active}>已签到人数</Link></li>
      </ul>
    </header>
  )
}

export default Header;
