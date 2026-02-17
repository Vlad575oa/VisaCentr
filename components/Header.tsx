"use client";

import React, { useState, useEffect } from 'react';
import { Globe, MessageCircle } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#destinations", label: "Страны" },
    { href: "#process", label: "Процесс" },
    { href: "#reviews", label: "Отзывы" },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#393528] bg-background-dark/95 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Globe className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">Visa-Service Qazaqstan</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1)
                                ? "text-primary bg-primary/10"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/77771234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background-dark transition-transform hover:scale-105 hover:bg-primary-hover shadow-lg shadow-primary/20"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>

                    <MobileMenu>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </MobileMenu>
                </div>
            </div>
        </header>
    );
}
