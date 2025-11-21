import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
    { name: "Carla M.", role: "Loja de Roupas", text: "Simplesmente salvou meu negócio. Não tinha tempo pra editar." },
    { name: "Pedro S.", role: "Hamburgueria", text: "A qualidade é absurda. Parece que contratei uma agência cara." },
    { name: "Júlia R.", role: "Influencer", text: "Consigo postar 5x mais conteúdo por dia. O engajamento explodiu." },
    { name: "Marcos T.", role: "E-commerce", text: "O custo benefício é imbatível. Recomendo pra todo mundo." },
    { name: "Ana P.", role: "Estética", text: "Minhas clientes amam os vídeos. Ficam muito profissionais." },
    { name: "Lucas F.", role: "Tech Store", text: "Vendi todo o estoque de fones só com um vídeo da Souvi." },
    { name: "Beatriz L.", role: "Joalheria", text: "A luz e o brilho nas joias ficaram perfeitos. Impressionante." },
    { name: "Rafael K.", role: "Academia", text: "Vídeos dinâmicos que combinam muito com nosso estilo." }
]

export const Reviews = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                        O que dizem nossos parceiros
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-sm text-gray-900">{review.name}</div>
                                    <div className="text-xs text-gray-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
