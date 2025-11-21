import React from 'react'
import { Globe, ChevronRight, ChevronDown, Linkedin, Youtube, MessageCircle } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Large CTA Banner */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-violet-700 mb-24">
                    <div className="px-6 py-20 md:py-24 text-center flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Scaling your video creation with TopView AI
                        </h2>
                        <button className="group flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-300 font-bold text-lg shadow-lg">
                            Start for free
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="font-bold text-white text-xl">T</span>
                                </div>
                                <span className="text-xl font-bold tracking-wide">TOPVIEW</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Scaling your video creation with AI
                            </p>
                        </div>

                        {/* Language Selector */}
                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                            <Globe className="w-4 h-4" />
                            <span>English</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </button>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Trustpilot Placeholder */}
                        <div className="inline-block bg-zinc-900 border border-zinc-800 rounded px-3 py-2">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-medium text-gray-300">Review us on Trustpilot</span>
                            </div>
                        </div>
                    </div>

                    {/* Columns 2-5: Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">

                        {/* AI Tools */}
                        <div>
                            <h4 className="text-zinc-500 font-semibold mb-6 text-sm uppercase tracking-wider">AI tools</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Avatar 4</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Product Avatar</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Product Anyshoot</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Materials to Video</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">URL to Video</a></li>
                                <li><a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></a></li>
                            </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                            <h4 className="text-zinc-500 font-semibold mb-6 text-sm uppercase tracking-wider">Use cases</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Advertising</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Affiliate marketing</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Ecommerce</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">DTC brands</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">AI live stream</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-zinc-500 font-semibold mb-6 text-sm uppercase tracking-wider">Resources</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Blog</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Affiliate program</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Learning center</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Alternative</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">API</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-zinc-500 font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Privacy policy</a></li>
                                <li><a href="#" className="text-zinc-300 hover:text-white text-sm transition-colors">Terms</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        © 2025 TOPVIEW PTE. LTD. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
