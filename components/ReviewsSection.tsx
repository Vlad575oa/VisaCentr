import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Александр Б.",
        date: "14 января 2024",
        destination: "Виза в США (B1/B2)",
        text: "Обратился в Visa-Service после двух отказов. Ребята провели глубокий аудит моих документов, нашли ошибки в анкете и подготовили к интервью. Итог — виза на 10 лет в чистый паспорт! Профессионалы своего дела.",
        rating: 5
    },
    {
        name: "Мария С.",
        date: "28 декабря 2023",
        destination: "Шенген (Франция)",
        text: "Нужна была срочная виза для бизнес-поездки. Записали на подачу уже через 2 дня, хотя слотов не было нигде. Все четко, быстро, без лишней суеты. Рекомендую всем, кому важен результат и время.",
        rating: 5
    },
    {
        name: "Даурен К.",
        date: "10 декабря 2023",
        destination: "Виза в Англию",
        text: "Очень сложный кейс был с подтверждением доходов. Консультанты помогли собрать правильный пакет документов. Получил одобрение за 3 недели. Спасибо за терпение и экспертность!",
        rating: 5
    },
    {
        name: "Елена В.",
        date: "22 ноября 2023",
        destination: "Виза в Японию",
        text: "Первый раз летели в Японию, боялись сложностей с приглашением. Visa-Service взяли всё на себя: от логистики до подачи. Мы только получили паспорта с визами. Очень довольны сервисом.",
        rating: 5
    }
];

export default function ReviewsSection() {
    return (
        <section className="py-20 lg:py-28 bg-background-dark overflow-hidden" id="reviews">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-primary">Отзывы клиентов</span>
                    <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
                        Нам доверяют <span className="text-primary">мечты</span> о путешествиях
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                        Более 70 000 успешно полученных виз и тысячи благодарных клиентов по всему Казахстану.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-[#393528] bg-surface-dark p-8 transition-all hover:bg-surface-lighter hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="absolute top-8 right-8 text-primary/10 transition-colors group-hover:text-primary/20">
                                <Quote size={56} />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="mb-8 text-lg italic leading-relaxed text-gray-300">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-800 pt-6">
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <div className="rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/20">
                                        {review.destination}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:border-primary hover:text-primary">
                        Смотреть все отзывы в Google Maps
                    </button>
                </div>
            </div>
        </section>
    );
}
