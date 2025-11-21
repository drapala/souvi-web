import React from 'react'
import { ArrowRight, Wand2, Video, RefreshCcw } from 'lucide-react'

export const FeaturesShowcase = () => {
    // Data for Block 1: AI Avatar
    const avatarFeatures = [
        {
            id: 1,
            badge: "Avatar 4",
            text: "Transforme qualquer foto em Avatar",
            gradient: "from-pink-500 to-purple-600"
        },
        {
            id: 2,
            badge: "Product Avatar",
            text: "Avatar apresenta qualquer produto",
            gradient: "from-purple-600 to-blue-600"
        },
        {
            id: 3,
            badge: "Design My Avatar",
            text: "Crie Avatar consistente",
            gradient: "from-cyan-500 to-blue-600"
        }
    ]

    // Data for Block 2: AI-Powered Video
    const videoFeatures = [
        {
            id: 1,
            title: "Vídeo de Marketing com Avatar",
            desc: "Insira uma URL ou faça upload de assets, a IA gera vídeo de marketing com Avatar estilo UGC realista.",
            icon: <Video className="w-12 h-12 text-gray-600" />,
            image: "https://api.lorem.space/image/movie?w=600&h=400"
        },
        {
            id: 2,
            title: "Estúdio de Produto IA",
            desc: "IA gera fotos de produto, encaixa qualquer produto em qualquer lugar. Perfeito para experimentação ou showcase de produto.",
            icon: <Wand2 className="w-12 h-12 text-gray-600" />,
            image: "https://api.lorem.space/image/fashion?w=600&h=400"
        },
        {
            id: 3,
            title: "Troca de Personagem",
            desc: "Substitua naturalmente qualquer pessoa na foto/vídeo com seu personagem customizado.",
            icon: <RefreshCcw className="w-12 h-12 text-gray-600" />,
            image: "https://api.lorem.space/image/face?w=600&h=400"
        }
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Block 1: AI Avatar */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h3 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">
                            AI Avatar
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Realista, Consistente, Customizável
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {avatarFeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className={`relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${feature.gradient} group cursor-pointer transition-transform hover:scale-[1.02] duration-300`}
                            >
                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {feature.badge}
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-lg font-semibold text-white max-w-[70%] leading-tight">
                                            {feature.text}
                                        </p>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Block 2: AI-Powered Video */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">
                            AI-Powered Video
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Edite, Gere, Impressione
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoFeatures.map((feature) => (
                            <div key={feature.id} className="group">
                                {/* Visual Container */}
                                <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-6 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                    {/* Placeholder Image - Replace src with actual UI screenshot */}
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                                    />

                                    {/* Fallback Icon Overlay (Optional, if image fails or for style) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        {/* You can remove this if you only want the image */}
                                        {/* {feature.icon} */}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="text-left">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
