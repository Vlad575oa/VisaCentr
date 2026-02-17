import React from 'react';

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Visa-Service Qazaqstan",
        "description": "Премиальный визовый консалтинг в Казахстане. Помощь в получении виз в США, Шенген, Великобританию и другие страны.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Visa-Service Qazaqstan",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "пр. Достык 180, БЦ Коктем",
                "addressLocality": "Алматы",
                "addressCountry": "KZ"
            },
            "telephone": "+77771234567"
        },
        "areaServed": "Kazakhstan",
        "serviceType": "Visa Consulting",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Визовые услуги",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Виза в США"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Шенгенская виза"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Виза в Великобританию"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
