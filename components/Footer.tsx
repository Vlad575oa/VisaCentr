import React from 'react';
import { Globe, Share2, AtSign, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-[#393528] bg-background-dark pt-16 pb-8">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Globe className="h-5 w-5" />
                            </div>
                            <span className="text-lg font-bold text-white">Visa-Service Qazaqstan</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Премиальный визовый консалтинг для граждан Казахстана. Мы открываем мир без границ для вас и вашего бизнеса.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lighter text-gray-400 hover:bg-[#229ED9] hover:text-white transition-colors" aria-label="Telegram">
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.11.17.26.19.37.02.08.01.24 0 .31z" />
                                </svg>
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lighter text-gray-400 hover:bg-primary hover:text-background-dark transition-colors" aria-label="WhatsApp">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lighter text-gray-400 hover:bg-primary hover:text-background-dark transition-colors">
                                <Share2 className="h-5 w-5" />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lighter text-gray-400 hover:bg-primary hover:text-background-dark transition-colors">
                                <AtSign className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Навигация</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Услуги и цены</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Виза в США</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Виза в Шенген</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Контакты</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>г. Алматы, пр. Достык 180,<br />БЦ "Коктем", офис 45</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>г. Астана, ул. Кунаева 12/1,<br />БЦ "На Водно-Зеленом", офис 12</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href="tel:+77771234567" className="hover:text-white transition-colors">+7 (777) 123-45-67</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href="mailto:info@visa-service.kz" className="hover:text-white transition-colors">info@visa-service.kz</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Payment */}
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Реквизиты</h4>
                        <div className="text-sm text-gray-500 space-y-2">
                            <p>ТОО "VISA-SERVICE QAZAQSTAN"</p>
                            <p>БИН: 123456789012</p>
                            <div className="mt-6">
                                <div className="flex items-center gap-1 rounded bg-white px-3 py-2 w-fit">
                                    <span className="text-[#f14635] font-bold text-lg">Kaspi</span>
                                    <span className="text-slate-900 font-bold text-lg">Pay</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Официальный партнер</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-[#393528] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600 text-center md:text-left">
                        © 2024 Visa-Service Qazaqstan. Все права защищены. <br />
                        Не является публичной офертой.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
