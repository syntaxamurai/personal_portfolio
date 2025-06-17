import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (<section id="hero" className="relatice min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I am</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Justin </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Abwunza </span>
                </h1>

                <h3 className="text-2xl text-gradient md:text-4xl font-mono tracking-wide animate-fade-in-delay-2">
                    Developer by Trade. Designer at Heart.
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I bridge the gap between aesthetics and logic. With attention to both user experience and code quality, I create web experiences with modern technologies that feel as good as they look.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll 
            </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    );
};