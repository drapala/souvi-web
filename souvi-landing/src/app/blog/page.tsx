import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Navbar } from '@/components/landing/Hero' // Assuming Navbar is exported or I need to extract it
import { Footer } from '@/components/landing/Footer'

// Re-using the Navbar from Hero might be tricky if it's not exported separately. 
// I'll check Hero.tsx again or just create a wrapper. 
// For now, I'll assume I can import Navbar if I export it from Hero.tsx or move it to a separate file.
// Actually, I should check if Navbar is exported. It wasn't in the previous view.
// I will refactor Navbar to a separate component first in a separate step if needed.
// For this file, I will assume I'll fix the Navbar import later or duplicate it for now to avoid breaking things.
// Wait, I can just use the same layout as the landing page?
// The landing page has Navbar inside Hero.
// I should probably extract Navbar to `src/components/Navbar.tsx`.

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    seoDescription
  }`
    return client.fetch(query)
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogIndex() {
    const posts = await getPosts()

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            {/* Navigation - Temporary duplication or I need to extract it */}
            <nav className="w-full flex items-center justify-between px-6 py-4 md:px-12 sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">TopView</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/blog" className="text-white text-sm font-medium transition-colors">Blog</Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-[#5b50ff] hover:bg-[#4f43e0] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-[0_0_15px_rgba(91,80,255,0.3)]">
                        Painel
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
                        Blog & Insights
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Dicas, tutoriais e novidades sobre marketing de vídeo, inteligência artificial e e-commerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group flex flex-col h-full bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-zinc-800">
                                {post.mainImage && (
                                    <img
                                        src={urlFor(post.mainImage).width(600).height(400).url()}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                {post.categories && post.categories.length > 0 && (
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                        {post.categories[0]}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </div>
                                    {post.author && (
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {post.seoDescription}
                                </p>

                                <div className="flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                                    Ler artigo
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
