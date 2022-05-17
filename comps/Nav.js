import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';

function Nav () {
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src="/Water emblem.png" width={225} height={225} alt="Alex Ho Logo"/>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.navbar}>
                    <Link href="/"><a><li className={styles.nav_items}>Home</li></a></Link>
                    <Link href="/#About"><a><li className={styles.nav_items}>About</li></a></Link>
                    <Link href="/#Projects"><a><li className={styles.nav_items}>Code</li></a></Link>
                    <Link href="/#Writing"><a><li className={styles.nav_items}>Writing</li></a></Link>
                    <Link href="/blog"><a><li className={styles.nav_items}>Blog</li></a></Link>
                    <Link href="/#Contact"><a><li className={styles.nav_items}>Contact</li></a></Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav;