import React from 'react'
import { Camera, User, Sparkles } from 'lucide-react'

export const ModelsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
                            <Sparkles className="w-4 h-4" />
                            AI Model Engine
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Modelos & Rostos da <br />
                            <span className="text-blue-600">Comunidade Souvi</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Não precisa contratar modelos. Nossa IA adapta rostos reais de criadores brasileiros para o seu produto.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Camera, title: "Envie a foto da modelo (ou use as nossas)", desc: "Banco com +500 criadores brasileiros reais." },
                                { icon: Sparkles, title: "Adaptação automática", desc: "A IA ajusta iluminação, cenário e ângulo para o seu produto." },
                                { icon: User, title: "Consistência visual", desc: "Mantenha o mesmo rosto em todas as suas campanhas." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
                                <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
                                <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl text-center min-w-[200px]">
                            <div className="text-3xl font-black text-gray-900 mb-1">100%</div>
                            <div className="text-sm text-gray-500 font-medium">UGC Realista</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
