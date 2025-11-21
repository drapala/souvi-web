import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://souvi.com' // Replace with actual domain

    // Fetch all posts
    const posts = await client.fetch(`*[_type == "post"] { slug, publishedAt }`)

    const blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post.publishedAt,
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...blogUrls,
    ]
}
