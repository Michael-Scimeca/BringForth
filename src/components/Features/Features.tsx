import styles from './Features.module.css';

const features = [
    {
        title: "Premium Aesthetics",
        description: "Designed with an obsession for detail, ensuring your brand looks world-class.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
        )
    },
    {
        title: "Lightning Fast",
        description: "Optimized for speed and performance, powered by the latest Next.js features.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        )
    },
    {
        title: "Global Scale",
        description: "Built to scale with your business, reaching users anywhere in the world.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        )
    }
];

export default function Features() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>Why Choose Us</h2>
                    <p className={styles.subtitle}>
                        We combine art and engineering to build digital products that stand out.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, idx) => (
                        <div key={idx} className={`${styles.card} glass-panel`}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
