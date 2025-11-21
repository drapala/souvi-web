import React from 'react'
import { Play } from 'lucide-react'

const categories = [
    "Moda", "Cosméticos", "Joias", "Restaurantes",
    "Cafeterias", "Pet shops", "Academias", "Beleza",
    "Eletrônicos", "Acessórios", "Decor"
]

export const ExamplesGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">
                        Veja exemplos reais criados com a Souvi
                    </h2>
                    <p className="text-xl text-gray-600">
                        Anúncios que convertem para qualquer nicho.
                    </p>
                </div>

                {/* Categories Scroll */}
                <div className="flex overflow-x-auto gap-3 pb-8 mb-8 no-scrollbar justify-start md:justify-center">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${i === 0
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 text-gray-900 ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <p className="font-medium text-sm">Exemplo {categories[i % categories.length]}</p>
                                <p className="text-xs opacity-80">Gerado em 2 min</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
