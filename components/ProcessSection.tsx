import React from 'react';
import { Stethoscope, FolderOpen, Send, PlaneTakeoff } from 'lucide-react';

const steps = [
    {
        icon: Stethoscope,
        title: '1. Диагностика',
        description: 'Анализ вашей ситуации, выявление рисков и выбор оптимальной стратегии подачи.',
        active: true
    },
    {
        icon: FolderOpen,
        title: '2. Подготовка',
        description: 'Сбор и перевод документов, заполнение анкет, запись на подачу в консульство.',
        active: false
    },
    {
        icon: Send,
        title: '3. Подача',
        description: 'Сопровождение в визовый центр или подача документов по доверенности.',
        active: false
    },
    {
        icon: PlaneTakeoff,
        title: '4. Результат',
        description: 'Контроль статуса рассмотрения и выдача паспорта с готовой визой.',
        active: false
    }
];

export default function ProcessSection() {
    return (
        <section className="bg-surface-dark py-20" id="process">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Как мы работаем</span>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Прозрачный процесс получения визы</h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute left-0 top-[2rem] hidden h-0.5 w-full bg-gray-800 lg:block"></div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={step.title} className="relative flex flex-col items-center text-center">
                                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-dark z-10 ${step.active ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' : 'bg-surface-lighter text-primary shadow-lg ring-1 ring-gray-700'}`}>
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
