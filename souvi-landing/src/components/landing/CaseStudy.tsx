import React from 'react'
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react'

export const CaseStudy = () => {
    return (
        <section className="py-24 bg-green-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-8">
                                CASE STUDY
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                “A Boutique Dona Rosa aumentou em <span className="text-green-400">72% as vendas</span> de acessórios.”
                            </h2>
                            <p className="text-xl text-green-100 mb-8 leading-relaxed">
                                Usando apenas fotos de celular e a Souvi, eles criaram uma campanha de Reels que viralizou na cidade em 48 horas.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                <div>
                                    <div className="font-bold">Ana Rosa</div>
                                    <div className="text-sm text-green-200">Fundadora, Boutique Dona Rosa</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[
                                { icon: TrendingUp, value: "30%", label: "Mais vendas" },
                                { icon: Users, value: "5x", label: "Mais alcance" },
                                { icon: ArrowUpRight, value: "80%", label: "Menos custo" },
                                { icon: Clock, value: "48h", label: "Para resultado" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                    <stat.icon className="w-6 h-6 text-green-400 mb-4" />
                                    <div className="text-4xl font-black mb-1">{stat.value}</div>
                                    <div className="text-green-100 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
