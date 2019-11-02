import React from 'react';
import FiveCard from './FiveCard';
import styles from './announcements.module.css';
export default function () {
    return (
        <section className={styles.index}>   
            <header>
                <h2>Announcements</h2>
            </header>
            <FiveCard />
        </section>
    )
}