import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundGlow} aria-hidden="true" />

            <div className={styles.content}>
                <span className={styles.eyebrow}>Introducing BringForth</span>
                <h1 className={styles.title}>
                    Build the Future, <br />
                    <span className="text-gradient">Beyond Limits.</span>
                </h1>
                <p className={styles.description}>
                    We craft digital experiences that transcend the ordinary.
                    Elevate your brand with cutting-edge design and seamless performance.
                </p>

                <div className={styles.actions}>
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline">Learn More</button>
                </div>
            </div>
        </section>
    );
}
