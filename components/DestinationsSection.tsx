import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Destination {
    name: string;
    image: string;
    badge?: string;
    description: string;
    badgeColor?: string;
}

const destinations: Destination[] = [
    {
        name: 'США',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4qtAyk3xPrlUyiKpbBRk58KaCtONx0_5YdWoDbl1EYbTiJjdeljA_9okvNixIv4NGL_aTp2XNn6tS5u8qtPqYXQhydU1xiSe-SIt0XrSC1QVutjoDbtHSRfugf3osFQs1fKr9Fr3cBgYlL-gWMG-PIU-EAozpGTWQ9TgkU1yKX35m87F-daTQBducPFb2VO93KClZNOyCA8eADQ-RykXqKSHS42lfY2tkUx8uZp4BdHClgJ2iBDRDNZoD08_WI7Jt-J1YEHFseJoB',
        badge: 'High Demand',
        badgeColor: 'bg-primary/20 text-primary',
        description: 'Туристические (B1/B2), студенческие (F1) и рабочие визы. Подготовка к интервью.'
    },
    {
        name: 'Шенген',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMbjeluQu4gK-eNm8B3MPjq4aHnm_4UfcWpO5xEfpvRnLj9csgCdr_Uk7QodVq5x6hEX67Mfw-NgRsbRiiT-lResvGM0XKGn1TkZVe8KwjbmVs-wRCff1oL-Y25pi3-1gE7vh2Lq__kyoyJWV3rlAt5qGZoDXvlwiT029v8THWCezl_Vhah7hl_jLbchC5IJUPTdkDYXta5rTvFC9VAKgcWfuV5HMnXf7VwI74OtezMO9OqR_mjjXu7Mc0XVajcjRCVDQ0Bl8-Dmy6',
        badge: 'Fast Track',
        badgeColor: 'bg-gray-700 text-gray-300',
        description: 'Франция, Италия, Испания, Германия. Мультивизы до 5 лет. Страхование.'
    },
    {
        name: 'Великобритания',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWI8kDmyc-Pheai-UyJMNKGtty6yYA8qoaCCU_bqe4JSqvDzt-wfEe-Pnv4lU9tbdcqoex5rFFl2ZEhXrAECzF5-odaNtsCUUQZQlThVPuNCttQRQpKJt0VCPew1cbNg2IkzPITX-Xw29T-AjauNZlilZZbNLqPLEsL7NXWgzS3SWd9cm4DAvX3jQQqHBHPIbfyEAofPF4CdbX65_RkMUgcaXaDVD3OIkrqRy5ckFf2NHKUwX5T37cDU01o-Bz5aEYHMlY9p0Fkq8i',
        description: 'Туризм, посещение родственников, бизнес. Сложные кейсы и апелляции.'
    },
    {
        name: 'Канада',
        image: '/images/destinations/canada.png',
        badge: 'New',
        badgeColor: 'bg-green-500/20 text-green-400',
        description: 'Туристические визы до конца срока действия паспорта. Супер-визы для родителей.'
    },
    {
        name: 'Южная Корея',
        image: '/images/destinations/south-korea.png',
        description: 'K-ETA для туристов, рабочие визы G-1 и студенческие D-2. Гарантия одобрения.'
    },
    {
        name: 'Япония',
        image: '/images/destinations/japan.png',
        badge: 'Premium',
        badgeColor: 'bg-purple-500/20 text-purple-400',
        description: 'Индивидуальный туризм и деловые поездки. Полная логистика по Японии.'
    }
];

export default function DestinationsSection() {
    return (
        <section className="py-20 lg:py-28" id="destinations">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Популярные направления</h2>
                        <p className="mt-4 text-lg text-gray-400">Мы специализируемся на странах со сложным визовым режимом.</p>
                    </div>
                    <div className="flex gap-2 rounded-lg bg-surface-dark p-1">
                        <button className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-background-dark shadow-sm">Все страны</button>
                        <button className="rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Америка</button>
                        <button className="rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Европа</button>
                        <button className="rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Азия</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((dest) => (
                        <div key={dest.name} className="group relative cursor-pointer overflow-hidden rounded-xl bg-surface-dark transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 border border-[#393528] hover:border-primary/30">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={`${dest.name} scenic view`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent opacity-90"></div>
                            </div>

                            <div className="absolute bottom-0 p-6 w-full">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{dest.name}</h3>
                                    {dest.badge && (
                                        <span className={`rounded-sm px-2 py-0.5 text-[10px] font-black uppercase tracking-widest ${dest.badgeColor}`}>
                                            {dest.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2">{dest.description}</p>
                                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:underline">
                                    Узнать больше <ArrowRight className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
