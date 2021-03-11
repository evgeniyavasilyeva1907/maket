import React from 'react';
import style from './Header.module.css';
import logo from '../../img/logo.png';
import avatar from '../../img/avatar.png'

const Header = () => {
    return (
        <header dir='rtl' className={style.header}>
            <div className={style.logo}>
                <div><img src={logo} alt='logo'></img></div>
                <h3>Jasper</h3>
            </div>
            <input placeholder="שופיח"></input>
                <nav>
                    <ul>
                        <li>
                            <a href="#">םישמתשמ לוהינ</a>
                        </li>
                        <li>
                            <a href="#">תוחתפמו עדימ לוהינ</a>
                        </li>
                    </ul>
                </nav>
            <div className={style.personInfo}>
                <div><img src={avatar} alt='avatar'></img></div>
                <div>ילארשי לארשי</div>
                <button><i className="fas fa-chevron-down"></i></button>
            </div>
        </header>
    )
}

export default Header;
