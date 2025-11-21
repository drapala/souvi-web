'use client'

import React, { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { pexelsService, PexelsVideo } from '@/lib/pexels'

const categories = [
    { name: "Moda", query: "fashion model" },
    { name: "Cosméticos", query: "makeup beauty" },
    { name: "Joias", query: "jewelry accessories" },
    { name: "Restaurantes", query: "food restaurant" },
    { name: "Cafeterias", query: "coffee cafe" },
    { name: "Pet shops", query: "pet dog cat" },
    { name: "Academias", query: "fitness gym workout" },
    { name: "Beleza", query: "beauty salon" },
    { name: "Eletrônicos", query: "technology gadgets" },
    { name: "Acessórios", query: "accessories fashion" },
    { name: "Decor", query: "home decor interior" }
]

export const ExamplesGrid = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const [videos, setVideos] = useState<PexelsVideo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true)
            const category = categories[activeCategory]
            const results = await pexelsService.searchVideos(category.query, 8)
            setVideos(results)
            setLoading(false)
        }

        fetchVideos()
    }, [activeCategory])

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
                            onClick={() => setActiveCategory(i)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${i === activeCategory
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {loading ? (
                        [...Array(8)].map((_, i) => (
                            <div key={i} className="aspect-[9/16] bg-gray-100 rounded-2xl animate-pulse" />
                        ))
                    ) : (
                        videos.map((video, i) => (
                            <div key={video.id} className="group relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    src={video.image}
                                    alt={categories[activeCategory].name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-5 h-5 text-gray-900 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <p className="font-medium text-sm truncate">{categories[activeCategory].name}</p>
                                    <p className="text-xs opacity-80">Gerado em 2 min</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
