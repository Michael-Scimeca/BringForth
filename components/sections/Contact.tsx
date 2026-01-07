import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied users who are already building with our platform.
                    Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                        Start Free Trial
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}
