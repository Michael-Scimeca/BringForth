import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-8">
                            {/* Abstract visual representation instead of image for now */}
                            <div className="aspect-square rounded-xl bg-background/50 backdrop-blur-sm border flex items-center justify-center">
                                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-600">
                                    Premium<br />Design
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Empowering the Next Generation of Creators
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We believe in the power of great design and engineering. Our mission is to provide
                            the tools and resources needed to build exceptional digital experiences.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p>Enterprise-ready infrastructure</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p>Seamless integration with existing workflows</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p>Dedicated support and community</p>
                            </div>
                        </div>

                        <Button size="lg">Learn More About Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
