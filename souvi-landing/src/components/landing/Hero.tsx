'use client'

import React, { useState, useEffect } from 'react'
import {
    ChevronDown,
    Upload,
    Link as LinkIcon,
    ArrowRight,
    Play,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Zap,
    Video,
    Image as ImageIcon
} from 'lucide-react'
import { pexelsService, PexelsPhoto } from '@/lib/pexels'

// Utility for class merging (simplified version of clsx + tailwind-merge)
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ')
}

// --- Components ---

const TopBanner = () => (
    <div className="w-full bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white py-2 px-4 text-center text-xs sm:text-sm font-medium relative overflow-hidden z-50">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        <div className="relative z-10 flex items-center justify-center gap-2">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Banana Pro is now live!
            </span>
            <span className="text-gray-200">|</span>
            <span className="font-semibold tracking-wide">BLACK FRIDAY SALE</span>
            <span className="bg-yellow-400 text-black text-[10px] px-1.5 py-0.5 rounded font-bold ml-1">-47% OFF</span>
        </div>
    </div>
)

const Navbar = () => (
    <nav className="w-full flex items-center justify-between px-6 py-4 md:px-12 relative z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Video className="text-white w-5 h-5" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">TopView</span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
            {['Use cases', 'AI tools', 'Resources'].map((item) => (
                <button key={item} className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                    {item}
                    <ChevronDown className="w-3 h-3 opacity-70" />
                </button>
            ))}
            <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">API</button>
            <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Pricing</button>
        </div>

        {/* Right: Auth */}
        <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Sign in
            </button>
            <button className="bg-[#5b50ff] hover:bg-[#4f43e0] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-[0_0_15px_rgba(91,80,255,0.3)]">
                Dashboard
            </button>
        </div>
    </nav>
)

const CarouselCard = ({
    reference,
    product,
    result,
    isActive
}: {
    reference: string,
    product: string,
    result: string,
    isActive: boolean
}) => {
    return (
        <div
            className={cn(
                "relative w-[300px] md:w-[380px] h-[250px] bg-[#111] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-between px-4 py-6 transition-all duration-500 ease-in-out transform",
                isActive ? "opacity-100 scale-100 z-10 shadow-2xl shadow-purple-900/20" : "opacity-40 scale-90 z-0 blur-[1px]"
            )}
        >
            {/* Reference */}
            <div className="flex flex-col items-center gap-2 z-10">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Reference</span>
                <div className="w-24 h-40 rounded-lg overflow-hidden border border-white/10 relative group">
                    <img src={reference} alt="Ref" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white opacity-80" />
                    </div>
                </div>
            </div>

            {/* Flow Arrow & Product */}
            <div className="flex flex-col items-center justify-center relative w-20 h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
                    <img src={product} alt="Product" className="w-8 h-8 object-contain" />
                </div>
                {/* Curved Arrow SVG */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 text-gray-600 pointer-events-none" viewBox="0 0 100 50">
                    <path
                        d="M 10,25 Q 50,50 90,25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-50"
                    />
                    <path
                        d="M 85,22 L 90,25 L 85,28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center gap-2 z-10">
                <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-wider font-semibold">AI-Recreated</span>
                <div className="w-24 h-40 rounded-lg overflow-hidden border border-purple-500/30 relative shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <img src={result} alt="Result" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [mounted, setMounted] = useState(false)
    const [cards, setCards] = useState([
        {
            id: 1,
            reference: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
            product: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
            result: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=600&fit=crop"
        },
        {
            id: 2,
            reference: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&h=600&fit=crop",
            product: "https://images.unsplash.com/photo-1602143407151-011141920038?w=200&h=200&fit=crop",
            result: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop"
        },
        {
            id: 3,
            reference: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&h=600&fit=crop",
            product: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
            result: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=400&h=600&fit=crop"
        }
    ])

    useEffect(() => {
        setMounted(true)

        // Fetch real images from Pexels
        const fetchPexelsImages = async () => {
            try {
                const [models, products] = await Promise.all([
                    pexelsService.searchPhotos('portrait model', 6),
                    pexelsService.searchPhotos('product photography', 3)
                ])

                if (models.length >= 6 && products.length >= 3) {
                    setCards([
                        {
                            id: 1,
                            reference: models[0].src.portrait,
                            product: products[0].src.medium,
                            result: models[1].src.portrait
                        },
                        {
                            id: 2,
                            reference: models[2].src.portrait,
                            product: products[1].src.medium,
                            result: models[3].src.portrait
                        },
                        {
                            id: 3,
                            reference: models[4].src.portrait,
                            product: products[2].src.medium,
                            result: models[5].src.portrait
                        }
                    ])
                }
            } catch (error) {
                console.error('Error fetching Pexels images:', error)
            }
        }

        fetchPexelsImages()
    }, [])

    const nextCard = () => setActiveIndex((prev) => (prev + 1) % cards.length)
    const prevCard = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-purple-500/30">
            <TopBanner />
            <Navbar />

            {/* Hero Centerpiece */}
            <main className="flex-1 flex flex-col items-center pt-16 pb-20 px-4 relative overflow-hidden">

                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <span
                        className={cn(
                            "text-gray-400 font-medium mb-6 tracking-wide transition-all duration-700 transform",
                            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        #1 Marketing Video Agent
                    </span>

                    <h1
                        className={cn(
                            "text-5xl md:text-7xl font-bold leading-tight mb-10 transition-all duration-700 delay-100 transform",
                            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        Turn Your Product Into <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                            Viral Videos
                        </span>
                    </h1>

                    {/* Input Component */}
                    <div
                        className={cn(
                            "w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl p-2 flex flex-col gap-2 shadow-2xl shadow-purple-900/10 transition-all duration-700 delay-200 transform",
                            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        )}
                    >
                        <div className="px-4 py-3">
                            <input
                                type="text"
                                placeholder="Upload your product image or reference video and describe your idea..."
                                className="w-full bg-transparent text-gray-300 placeholder-gray-600 outline-none text-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between px-2">
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg text-sm text-gray-300 transition-colors border border-white/5">
                                    <ImageIcon className="w-4 h-4 text-purple-400" />
                                    Add Image & Link
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg text-sm text-gray-300 transition-colors border border-white/5">
                                    <Video className="w-4 h-4 text-blue-400" />
                                    Reference Video
                                </button>
                            </div>
                            <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comparison Carousel */}
                <div className="mt-24 w-full max-w-6xl mx-auto relative">
                    <div className="flex justify-center items-center gap-6 overflow-hidden py-10">
                        {cards.map((card, index) => {
                            // Simple logic to show 3 cards, centered one is active
                            const isCenter = index === activeIndex;

                            return (
                                <CarouselCard
                                    key={card.id}
                                    {...card}
                                    isActive={isCenter}
                                />
                            )
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={prevCard}
                            className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextCard}
                            className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </main>
        </div>
    )
}
