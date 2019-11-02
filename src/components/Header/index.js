import React from 'react';

import styles from './header.module.css';

import Logo from './Logo';
import Nav from './Nav';


export default function () {
    return (
        <header className={styles.header}>
            <Logo />
            {/* <a href="/" ><h1>The Lunch Podcast</h1></a> */}
            <Nav />
        </header>
    )
}