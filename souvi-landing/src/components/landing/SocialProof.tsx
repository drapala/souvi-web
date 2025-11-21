import React from 'react'
import { ChevronRight } from 'lucide-react'

export const SocialProof = () => {
    const brands = [
        "FILA", "EF", "Shopee", "AliExpress",
        "TikTok Shop", "L'OREAL", "SAMSUNG", "LocknLock"
    ]

    return (
        <section className="bg-black py-20 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Top Part: Trusted Brands */}
                <div className="w-full mb-24">
                    <p className="text-gray-400 text-sm font-medium mb-10 tracking-wide">
                        Trusted by Top-Tier Companies of All Sizes
                    </p>

                    <div className="overflow-hidden w-full">
                        <div className="flex space-x-12 md:space-x-16 marquee-content">
                            {brands.concat(brands).map((brand, idx) => (
                                <span
                                    key={brand + idx}
                                    className="text-xl md:text-2xl font-bold text-white opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Part: Intermediate CTA */}
                <div className="flex flex-col items-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
                        Get Inspired by Real Brands
                    </h2>

                    <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-900/20">
                        Create now
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    )
}
