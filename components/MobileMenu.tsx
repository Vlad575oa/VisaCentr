"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 md:hidden border-t border-[#393528] bg-surface-dark px-4 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-4" onClick={() => setIsMenuOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
