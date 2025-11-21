import React from 'react'
import { Zap, TrendingDown, GraduationCap } from 'lucide-react'

export const ValueProp = () => {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Crie anúncios em minutos, <br />
                        <span className="text-green-400">por uma fração do custo</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Zap,
                            value: "10x",
                            label: "Mais rápido",
                            desc: "Do que editar manualmente ou contratar freelancer."
                        },
                        {
                            icon: TrendingDown,
                            value: "90%",
                            label: "Mais barato",
                            desc: "Economize milhares de reais com agências e estúdios."
                        },
                        {
                            icon: GraduationCap,
                            value: "0",
                            label: "Curva de aprendizado",
                            desc: "Se você sabe usar o WhatsApp, sabe usar a Souvi."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 text-center hover:bg-gray-800 transition-colors">
                            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-8 h-8 text-green-400" />
                            </div>
                            <div className="text-5xl font-black text-white mb-2">{item.value}</div>
                            <div className="text-xl font-bold text-green-400 mb-4">{item.label}</div>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
