import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Mountain className="h-6 w-6 text-primary" />
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Premium<span className="text-primary">Solutions</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="#features" className="hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#about" className="hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button>Get Started</Button>
                </div>
            </div>
        </header>
    );
}
