import React from 'react'
import { ArrowRight } from 'lucide-react'

export const PromoBanner = () => {
    return (
        <div className="bg-gray-900 text-white py-2 px-4 text-center text-sm font-medium relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-center gap-2 flex-wrap">
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">NOVO</span>
                <span>LANÇAMENTO OFICIAL • 47% OFF para os 300 primeiros negócios 💚</span>
                <span className="hidden sm:inline mx-2 text-gray-500">|</span>
                <a href="#" className="inline-flex items-center hover:text-green-400 transition-colors group">
                    Válido apenas hoje — peça pelo WhatsApp
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    )
}
