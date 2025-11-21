'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const questions = [
        "What is an AI Video Tool for Marketing?",
        "What makes Topview the best AI Video Tool for Marketing?",
        "Who is Topview for?",
        "Can I use Topview without video editing experience?",
        "What do I need to create a marketing video with Topview?",
        "What makes Topview different from other AI marketing video tools?",
        "Can Topview create videos for e-commerce or social media ads?",
        "Does Topview support multiple languages or markets?",
        "How long does it take to generate an AI marketing video?",
        "Can I try Topview for free?",
        "Does the generated video have a watermark?",
        "Is my uploaded content safe?",
        "Can I use Topview videos for commercial purposes?"
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked Questions
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
