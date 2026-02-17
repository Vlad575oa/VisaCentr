"use client";

import React from 'react';

export default function FloatingTelegram() {
    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <a
                href="https://t.me/77771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1c86ba] active:scale-95 shadow-blue-500/30"
                aria-label="Telegram"
            >
                {/* Pulse animation */}
                <span className="absolute inset-0 animate-ping rounded-full bg-[#229ED9]/40 duration-1000"></span>

                <svg className="relative z-10 h-7 w-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.11.17.26.19.37.02.08.01.24 0 .31z" />
                </svg>

                {/* Tooltip */}
                <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-surface-dark border border-[#393528] px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-xl pointer-events-none">
                    Написать в Telegram
                </span>
            </a>
        </div>
    );
}
