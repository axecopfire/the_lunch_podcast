import React from 'react';
import logo from '../../static/the_lunch_podcast_logo.png';
import styles from './header.module.css';


export default function Logo () {
    return (
        <a href="/">
            <img className={styles.logo} src={logo} 
                alt="Wizard conjuring The Lunch Podcast" />
        </a>
    );
}