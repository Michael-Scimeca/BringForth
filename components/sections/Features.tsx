import { Zap, Shield, Globe, BarChart } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built for speed and performance. Experience zero latency with our optimized edge network.",
    },
    {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "Your data is protected by enterprise-level encryption and advanced security protocols.",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Deploy worldwide in seconds. reliable infrastructure that scales with your business.",
    },
    {
        icon: BarChart,
        title: "Real-time Analytics",
        description: "Gain actionable insights with our comprehensive dashboard and reporting tools.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Everything you need to succeed
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our platform provides powerful tools and features designed to help you build, launch, and grow your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
