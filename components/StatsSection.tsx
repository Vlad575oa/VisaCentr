import React from 'react';
import { Users, Calendar, ShieldCheck, Headphones } from 'lucide-react';

const stats = [
    { value: '70k+', label: 'Довольных клиентов', icon: Users },
    { value: '20', label: 'Лет опыта', icon: Calendar },
    { value: '98%', label: 'Успешных кейсов', icon: ShieldCheck },
    { value: '24/7', label: 'Личный менеджер', icon: Headphones },
];

export default function StatsSection() {
    return (
        <section className="border-y border-[#393528] bg-surface-dark py-12">
            <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="mb-2 text-4xl font-black text-white sm:text-5xl">{stat.value}</div>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                            <stat.icon className="h-5 w-5" />
                            <span className="font-bold">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
