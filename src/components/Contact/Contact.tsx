"use client";

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section}>
            <div className={styles.glow} aria-hidden="true" />

            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Start?</h2>
                    <p className={styles.description}>
                        Join us on this journey. Reach out today and let's build something extraordinary together.
                    </p>

                    <form className={styles.form} onClick={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" className={styles.input} />
                        <button className="btn btn-primary">
                            Get in Touch
                        </button>
                    </form>
                </div>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} BringForth. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
