// Pexels API Service
// API Documentation: https://www.pexels.com/api/documentation/

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || 'YOUR_API_KEY_HERE'
const BASE_URL = 'https://api.pexels.com/v1'
const VIDEOS_BASE_URL = 'https://api.pexels.com/videos'

interface PexelsPhoto {
    id: number
    width: number
    height: number
    url: string
    photographer: string
    photographer_url: string
    src: {
        original: string
        large2x: string
        large: string
        medium: string
        small: string
        portrait: string
        landscape: string
        tiny: string
    }
}

interface PexelsVideo {
    id: number
    width: number
    height: number
    url: string
    image: string
    duration: number
    user: {
        name: string
        url: string
    }
    video_files: Array<{
        id: number
        quality: string
        file_type: string
        width: number
        height: number
        link: string
    }>
    video_pictures: Array<{
        id: number
        picture: string
        nr: number
    }>
}

interface PexelsSearchResponse<T> {
    page: number
    per_page: number
    total_results: number
    next_page?: string
    prev_page?: string
    photos?: T[]
    videos?: T[]
}

class PexelsService {
    private headers = {
        Authorization: PEXELS_API_KEY,
    }

    async searchPhotos(query: string, perPage: number = 15): Promise<PexelsPhoto[]> {
        try {
            const response = await fetch(
                `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=portrait`,
                { headers: this.headers }
            )

            if (!response.ok) {
                console.error('Pexels API error:', response.status)
                return []
            }

            const data: PexelsSearchResponse<PexelsPhoto> = await response.json()
            return data.photos || []
        } catch (error) {
            console.error('Error fetching photos from Pexels:', error)
            return []
        }
    }

    async searchVideos(query: string, perPage: number = 15): Promise<PexelsVideo[]> {
        try {
            const response = await fetch(
                `${VIDEOS_BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=portrait`,
                { headers: this.headers }
            )

            if (!response.ok) {
                console.error('Pexels Videos API error:', response.status)
                return []
            }

            const data: PexelsSearchResponse<PexelsVideo> = await response.json()
            return data.videos || []
        } catch (error) {
            console.error('Error fetching videos from Pexels:', error)
            return []
        }
    }

    async getCuratedPhotos(perPage: number = 15): Promise<PexelsPhoto[]> {
        try {
            const response = await fetch(
                `${BASE_URL}/curated?per_page=${perPage}`,
                { headers: this.headers }
            )

            if (!response.ok) {
                console.error('Pexels API error:', response.status)
                return []
            }

            const data: PexelsSearchResponse<PexelsPhoto> = await response.json()
            return data.photos || []
        } catch (error) {
            console.error('Error fetching curated photos from Pexels:', error)
            return []
        }
    }

    async getPopularVideos(perPage: number = 15): Promise<PexelsVideo[]> {
        try {
            const response = await fetch(
                `${VIDEOS_BASE_URL}/popular?per_page=${perPage}`,
                { headers: this.headers }
            )

            if (!response.ok) {
                console.error('Pexels Videos API error:', response.status)
                return []
            }

            const data: PexelsSearchResponse<PexelsVideo> = await response.json()
            return data.videos || []
        } catch (error) {
            console.error('Error fetching popular videos from Pexels:', error)
            return []
        }
    }

    // Get best quality video file for mobile (vertical)
    getBestVideoFile(video: PexelsVideo): string {
        const verticalFiles = video.video_files
            .filter(file => file.height > file.width) // Portrait orientation
            .sort((a, b) => b.height - a.height) // Sort by quality

        return verticalFiles[0]?.link || video.video_files[0]?.link || ''
    }
}

export const pexelsService = new PexelsService()
export type { PexelsPhoto, PexelsVideo }
