import React from 'react';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                THE POST OFFICE
            </div>
        </div>
    );
}

export default Header;