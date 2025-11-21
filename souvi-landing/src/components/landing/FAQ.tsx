'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const questions = [
        "O que é uma Ferramenta de Vídeo IA para Marketing?",
        "O que torna o Souvi a melhor Ferramenta de Vídeo IA para Marketing?",
        "Para quem é o Souvi?",
        "Posso usar o Souvi sem experiência em edição de vídeo?",
        "O que preciso para criar um vídeo de marketing com o Souvi?",
        "O que torna o Souvi diferente de outras ferramentas de vídeo IA?",
        "O Souvi pode criar vídeos para e-commerce ou anúncios em redes sociais?",
        "O Souvi suporta múltiplos idiomas ou mercados?",
        "Quanto tempo leva para gerar um vídeo de marketing com IA?",
        "Posso experimentar o Souvi gratuitamente?",
        "O vídeo gerado tem marca d'água?",
        "Meu conteúdo enviado está seguro?",
        "Posso usar vídeos do Souvi para fins comerciais?"
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden transition-colors hover:border-zinc-700"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium pr-8">{question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
