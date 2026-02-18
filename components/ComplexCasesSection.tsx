import React from 'react';
import Image from 'next/image';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ComplexCasesSection() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-surface-lighter to-surface-dark border border-[#393528]">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 sm:p-12">
                            <div className="mb-4 inline-flex items-center gap-2 rounded bg-red-500/10 px-3 py-1 text-xs font-bold text-red-500 w-fit">
                                <AlertTriangle className="h-4 w-4" />
                                СЛОЖНЫЕ СЛУЧАИ
                            </div>
                            <h2 className="mb-4 text-3xl font-bold text-white">Отказ — это не приговор</h2>
                            <p className="mb-6 text-gray-400">
                                40% наших клиентов обращаются к нам после отказа при самостоятельной подаче.
                                Мы знаем, как правильно закрыть предыдущий отказ и убедить консула изменить решение.
                            </p>

                            <ul className="mb-8 space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Работа с "чистыми" паспортами</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Помощь при недостаточном финансовом обеспечении</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Срочная запись при отсутствии слотов</span>
                                </li>
                            </ul>

                            <button className="w-fit rounded-lg border border-primary text-primary hover:bg-primary hover:text-background-dark px-6 py-3 text-sm font-bold transition-colors">
                                Получить консультацию по отказу
                            </button>
                        </div>

                        <div className="relative min-h-[300px] lg:min-h-full">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCnwjq3uKV5am6pH2geAvI7SBldvh7iiT1o8G2-OSDo2vujwJOGMKtvd0TKUXnxIIOiEWVOq4pvL5gdYqwRsPcBEhyw9GP6UDHcNqZxPM-z97x3UHJVPD2BR8EwNGv4AYWYk2TuTByo4k8mNPfG76G6Zvk8h9ijqY5SeSAraxSYXgBMkr80vGHV8w61EBvMa9QS6HniwvseO35tMHVQPckY_C3jx8SWw6smP8TqUq_OYIXpKZd-5ES0q8z5eIbjS6L-gkZQ0Rv3Rm8"
                                alt="Business professional discussing documents at desk"
                                fill
                                style={{ objectFit: 'cover' }}
                                decoding="async"
                                className="opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-surface-dark lg:via-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
