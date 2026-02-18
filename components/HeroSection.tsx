import React from 'react';
import Image from 'next/image';
import { BadgeCheck, ArrowRight, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import VisaForm from '@/features/VisaForm';

export default function HeroSection() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVAw2QBIhbTu6j4DIuWbxzYzVxk6KcDg9-0wAuUmQutF0v9kCYOgeifh17OIo1A6crkK-gsqm9Quqel9P6GqPY6dwD27iEFlM6DpOLGOFVqp3txRZTktFBErfB3r0L1_mREaO59fKQ9QzKyjjFVvjnvBjdWdBFL1zl_hATFs49GLMQCxrdZzlgs6krCC2ougQNEd_i2GtoL0M5ifQiuD1td7-nCeBkapyXTZrYor514Y_iHOw15QqNdjyCjJvwstN4d_73w-fZ4X6"
                    alt="Modern airport lounge interior with glass windows"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    quality={80}
                    style={{ objectFit: 'cover' }}
                    className="opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto grid max-w-[1200px] w-full grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">

                {/* Hero Content */}
                <div className="flex flex-col justify-center lg:col-span-7">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-6 backdrop-blur-sm">
                        <BadgeCheck className="h-4 w-4 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wider font-bold">Официальная визовая поддержка</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Оформим визу без <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#f5d77e]">стресса и риска</span> отказа
                    </h1>

                    <p className="mb-8 max-w-xl text-lg text-gray-400">
                        Профессиональная визовая поддержка с гарантией результата.
                        Разбор сложных случаев, помощь после отказов и полное сопровождение до получения паспорта.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-background-dark transition-all hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(238,189,43,0.3)]">
                            Получить консультацию
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary">
                            <ClipboardCheck className="h-5 w-5" />
                            Проверить шансы
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-gray-800 pt-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="font-medium text-gray-300">Работаем с 2004 года</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="font-medium text-gray-300">Офисы в Алматы и Астане</span>
                        </div>
                    </div>
                </div>

                {/* Lead Form */}
                <div className="lg:col-span-5 relative">
                    <VisaForm />
                </div>
            </div>
        </section>
    );
}
