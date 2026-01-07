import Link from "next/link";
import { Mountain, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Mountain className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">PremiumSolutions</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevating your business with innovative digital solutions.
                            Designed for the future.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Connect</h3>
                        <div className="flex space-x-4 text-muted-foreground">
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} PremiumSolutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
