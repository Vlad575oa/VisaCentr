"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function VisaForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        country: 'USA (B1/B2, Студенческая)',
        purpose: 'Туризм / Отдых',
        urgency: 'Стандартно',
        hasRefusal: false,
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleNext = () => setStep(2);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.phone) return setStatus('error');

        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-dark p-8 shadow-2xl text-center backdrop-blur-md">
                <div className="mb-4 flex justify-center text-primary">
                    <CheckCircle2 size={64} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Заявка принята!</h3>
                <p className="text-gray-400">Наш эксперт свяжется с вами в течение 15 минут для бесплатной консультации.</p>
                <button
                    onClick={() => { setStatus('idle'); setStep(1); }}
                    className="mt-8 text-primary font-bold hover:underline"
                >
                    Отправить еще одну заявку
                </button>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border border-[#393528] bg-surface-dark p-6 shadow-2xl sm:p-8 backdrop-blur-md">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white">Оценка шансов на визу</h3>
                        <p className="text-xs text-gray-400">Шаг {step} из 2</p>
                    </div>
                    <div className="flex gap-1">
                        <div className={`h-1.5 w-6 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-800'}`}></div>
                        <div className={`h-1.5 w-6 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-800'}`}></div>
                    </div>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    {step === 1 ? (
                        <>
                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Куда планируете поехать?</label>
                                <select
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    className="w-full rounded-lg border border-gray-700 bg-background-dark p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none cursor-pointer"
                                >
                                    <option>США (B1/B2, Студенческая)</option>
                                    <option>Шенген (Европа)</option>
                                    <option>Великобритания</option>
                                    <option>Канада</option>
                                    <option>Другая страна</option>
                                </select>
                            </div>

                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Цель поездки</label>
                                <select
                                    value={formData.purpose}
                                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                    className="w-full rounded-lg border border-gray-700 bg-background-dark p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none cursor-pointer"
                                >
                                    <option>Туризм / Отдых</option>
                                    <option>Бизнес / Конференция</option>
                                    <option>Обучение</option>
                                    <option>Лечение</option>
                                    <option>Посещение родственников</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <input
                                    type="checkbox"
                                    id="refusal"
                                    checked={formData.hasRefusal}
                                    onChange={(e) => setFormData({ ...formData, hasRefusal: e.target.checked })}
                                    className="h-4 w-4 rounded border-gray-700 bg-background-dark text-primary focus:ring-primary accent-primary cursor-pointer"
                                />
                                <label htmlFor="refusal" className="text-sm text-gray-300 select-none cursor-pointer">Были отказы в визе ранее?</label>
                            </div>

                            <button
                                type="button"
                                onClick={handleNext}
                                className="mt-2 w-full rounded-lg bg-primary py-4 text-center text-sm font-black uppercase tracking-widest text-background-dark shadow-lg transition-all active:scale-95 hover:bg-primary-hover hover:shadow-primary/20"
                            >
                                Далее
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Срочность</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Стандартно', 'Срочно'].map((u) => (
                                        <label key={u} className={`group flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-3 transition-all ${formData.urgency === u ? 'border-primary bg-primary/10' : 'border-gray-700 bg-background-dark hover:border-primary/50'}`}>
                                            <input
                                                type="radio"
                                                name="urgency"
                                                className="hidden"
                                                checked={formData.urgency === u}
                                                onChange={() => setFormData({ ...formData, urgency: u })}
                                            />
                                            <span className={`text-sm font-bold transition-colors ${formData.urgency === u ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>{u}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Номер телефона</label>
                                <input
                                    type="tel"
                                    placeholder="+7 (___) ___-__-__"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className={`w-full rounded-lg border p-3 text-white bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${status === 'error' ? 'border-red-500' : 'border-gray-700'}`}
                                />
                                {status === 'error' && (
                                    <p className="flex items-center gap-1 text-[10px] text-red-500 font-bold uppercase mt-1">
                                        <AlertCircle size={12} /> Введите номер телефона
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full relative flex items-center justify-center rounded-lg bg-primary py-4 text-sm font-black uppercase tracking-widest text-background-dark shadow-lg transition-all active:scale-95 hover:bg-primary-hover hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <div className="h-5 w-5 border-2 border-background-dark border-t-transparent animate-spin rounded-full"></div>
                                    ) : (
                                        <>Отправить <Send className="h-4 w-4 ml-2" /></>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-xs text-gray-500 hover:text-white transition-colors"
                                >
                                    Вернуться назад
                                </button>
                            </div>
                        </>
                    )}

                    <p className="text-center text-[10px] leading-relaxed text-gray-600 mt-2 uppercase tracking-tighter">
                        Нажимая кнопку, вы соглашаетесь с <span className="underline cursor-pointer">политикой обработки данных</span>.
                    </p>
                </form>
            </div>
        </div>
    );
}
