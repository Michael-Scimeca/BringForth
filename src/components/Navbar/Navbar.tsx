"use client";

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <nav className={styles.nav}>
                    <a href="#" className={styles.logo}>
                        Bring<span className="text-gradient">Forth</span>
                    </a>

                    <div className={styles.links}>
                        <a href="#features" className={styles.link}>Features</a>
                        <a href="#about" className={styles.link}>About</a>
                        <a href="#contact" className={styles.link}>Contact</a>
                    </div>

                    <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
                        Sign In
                    </button>
                </nav>
            </div>
        </header>
    );
}
