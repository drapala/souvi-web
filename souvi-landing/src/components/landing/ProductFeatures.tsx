import React from 'react'
import { Video, FileText, Wand2, Mic, BarChart3, MessageSquare } from 'lucide-react'

const features = [
    {
        icon: Video,
        title: "Souvi UGC Engine",
        subtitle: "Geração de vídeo realista",
        desc: "Transforma fotos estáticas em vídeos dinâmicos com movimento natural.",
        bullets: ["Motion AI avançado", "Física realista de tecidos", "Iluminação adaptativa"]
    },
    {
        icon: FileText,
        title: "Souvi Script Maker",
        subtitle: "Roteiros que vendem",
        desc: "Gera scripts baseados em ganchos virais do TikTok e Reels.",
        bullets: ["Hooks de alta retenção", "CTAs persuasivos", "Linguagem nativa da plataforma"]
    },
    {
        icon: Wand2,
        title: "Souvi Auto-Edit",
        subtitle: "Edição estilo TikTok",
        desc: "Cortes rápidos, legendas dinâmicas e transições que prendem a atenção.",
        bullets: ["Legendas automáticas", "Zoom & Pan dinâmicos", "Efeitos sonoros"]
    },
    {
        icon: Mic,
        title: "Souvi Voiceover AI",
        subtitle: "Narração humanizada",
        desc: "Vozes brasileiras naturais, com entonação e emoção corretas.",
        bullets: ["Sotaques regionais", "Vozes masculinas e femininas", "Sincronia labial (Lip-sync)"]
    },
    {
        icon: BarChart3,
        title: "Distribution Insights",
        subtitle: "Dados de tendência",
        desc: "Saiba exatamente quais hashtags e áudios usar para viralizar.",
        bullets: ["Músicas em alta", "Melhores horários", "Hashtags do nicho"]
    },
    {
        icon: MessageSquare,
        title: "Tudo pelo WhatsApp",
        subtitle: "Zero complexidade",
        desc: "Sem login, sem senha, sem dashboard complicado.",
        bullets: ["Envio de fotos por chat", "Aprovação instantânea", "Download direto no celular"]
    }
]

export const ProductFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Uma agência completa <br />
                        <span className="text-green-500">dentro do seu WhatsApp</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {features.map((feature, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-xl text-green-600 font-medium mb-4">{feature.subtitle}</p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.desc}</p>
                                <ul className="space-y-3">
                                    {feature.bullets.map((bullet, b) => (
                                        <li key={b} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="aspect-video bg-gray-100 rounded-3xl shadow-lg border border-gray-200 relative overflow-hidden group">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <span className="font-mono text-sm">Preview: {feature.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
