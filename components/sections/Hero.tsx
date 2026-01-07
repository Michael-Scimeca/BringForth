import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48 lg:pt-40 lg:pb-56">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 blur-[100px]" />
            </div>

            <div className="container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground mb-8 backdrop-blur-sm bg-background/50">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                    announcing our beta release
                </div>

                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6">
                    Build the <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Future</span> of
                    <br className="hidden sm:block" /> Digital Experiences.
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl mb-10 leading-relaxed">
                    Create stunning, high-performance web applications with our premium tools.
                    Designed for developers who demand the best in design and functionality.a
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button size="lg" className="h-12 px-8 text-base">
                        Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                        View Documentation
                    </Button>
                </div>
            </div>
        </section>
    );
}
