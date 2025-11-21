'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
    author: string
    mainImage: any
    categories: string[]
    seoDescription: string
}

export const BlogSection = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
                    _id,
                    title,
                    slug,
                    publishedAt,
                    "author": author->name,
                    mainImage,
                    "categories": categories[]->title,
                    seoDescription
                }`
                const data = await client.fetch(query)
                setPosts(data)
            } catch (error) {
                console.error("Failed to fetch posts", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <section className="bg-black py-24 text-white border-t border-white/10" id="blog">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse space-y-8">
                        <div className="h-8 bg-zinc-800 w-48 rounded"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-96 bg-zinc-800 rounded-2xl"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (posts.length === 0) return null

    return (
        <section className="bg-black py-24 text-white border-t border-white/10" id="blog">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h3 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">
                            Blog
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Insights & Novidades
                        </h2>
                    </div>
                    <Link href="/blog" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        Ver todos os artigos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group flex flex-col h-full bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
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
            </div>
        </section>
    )
}
