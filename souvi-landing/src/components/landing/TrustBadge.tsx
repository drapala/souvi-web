import React from 'react'

export const TrustBadge = () => {
    return (
        <section className="py-10 border-y border-gray-100 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                    Confiado por +2.000 negócios de todos os tamanhos
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for Logos */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-300/50 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        </section>
    )
}
