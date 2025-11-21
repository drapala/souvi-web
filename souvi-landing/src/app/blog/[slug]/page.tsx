import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Navbar } from '@/components/landing/Hero'
import { Footer } from '@/components/landing/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

// Define components for Portable Text to style the content
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="my-8 relative w-full h-96 rounded-2xl overflow-hidden">
                    <img
                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                        alt={value.alt || ' '}
                        className="object-cover w-full h-full"
                    />
                </div>
            )
        }
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-12 mb-6 text-white">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-10 mb-5 text-white">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold mt-6 mb-3 text-white">{children}</h4>,
        normal: ({ children }: any) => <p className="mb-6 text-gray-300 leading-relaxed text-lg">{children}</p>,
        blockquote: ({ children }: any) => <blockquote className="border-l-4 border-purple-500 pl-4 italic text-xl text-gray-400 my-8">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-gray-300 space-y-2">{children}</ol>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a href={value.href} rel={rel} className="text-blue-400 hover:text-blue-300 underline transition-colors">
                    {children}
                </a>
            )
        },
    },
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{name, image},
    "categories": categories[]->title,
    body,
    seoDescription
  }`
    return client.fetch(query, { slug })
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: 'Post não encontrado | Souvi',
            description: 'O post que você procura não existe.'
        }
    }

    return {
        title: `${post.title} | Blog Souvi`,
        description: post.seoDescription || post.title,
        openGraph: {
            title: post.title,
            description: post.seoDescription || post.title,
            images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author?.name || 'Souvi Team'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.seoDescription || post.title,
            images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
        }
    }
}

export const revalidate = 60

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
                    <Link href="/blog" className="text-blue-500 hover:underline">Voltar para o blog</Link>
                </div>
            </div>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
        datePublished: post.publishedAt,
        author: [{
            '@type': 'Person',
            name: post.author?.name || 'Souvi Team',
        }],
        description: post.seoDescription
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
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

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Voltar para o blog
                </Link>

                <article>
                    {/* Header */}
                    <header className="mb-12 text-center">
                        {post.categories && post.categories.length > 0 && (
                            <div className="flex justify-center gap-2 mb-6">
                                {post.categories.map((cat: string) => (
                                    <span key={cat} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    {post.author.image && (
                                        <img
                                            src={urlFor(post.author.image).width(32).height(32).url()}
                                            alt={post.author.name}
                                            className="w-8 h-8 rounded-full object-cover border border-white/10"
                                        />
                                    )}
                                    <span className="font-medium text-white">{post.author.name}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Main Image */}
                    {post.mainImage && (
                        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-purple-900/20">
                            <img
                                src={urlFor(post.mainImage).width(1200).height(675).url()}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <PortableText value={post.body} components={ptComponents} />
                    </div>
                </article>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </main>

            <Footer />
        </div>
    )
}
