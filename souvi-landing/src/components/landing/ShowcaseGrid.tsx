'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ComparisonCard } from './ComparisonCard';
import { pexelsService, PexelsVideo } from '@/lib/pexels';

type Example = {
    id: number;
    category: string;
    referenceVideo: string;
    referencePoster: string;
    aiVideo: string;
    aiPoster: string;
    productIcon: string;
};

const categories = [
    { name: 'Makeup', query: 'makeup tutorial' },
    { name: 'Consumer Electronics', query: 'technology gadget' },
    { name: 'Beverages', query: 'drink beverage' },
    { name: 'Outdoor Equipment', query: 'outdoor adventure' },
    { name: 'Accessories', query: 'fashion accessories' },
    { name: 'Jewelry', query: 'jewelry' },
    { name: 'Fragrances', query: 'perfume fragrance' },
    { name: 'Mobile Apps', query: 'smartphone app' },
    { name: 'Supplements', query: 'fitness supplement' },
    { name: 'Bags', query: 'handbag fashion' },
    { name: 'Footwear', query: 'shoes sneakers' },
    { name: 'Eyewear', query: 'sunglasses eyewear' },
    { name: 'Food & Beverage', query: 'food cooking' },
    { name: 'Pet Food', query: 'pet dog cat' }
];

export const ShowcaseGrid = () => {
    const [showAll, setShowAll] = useState(false);
    const [examples, setExamples] = useState<Example[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPexelsVideos = async () => {
            setLoading(true);
            const allExamples: Example[] = [];

            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                try {
                    const videos = await pexelsService.searchVideos(category.query, 2);

                    if (videos.length >= 2) {
                        allExamples.push({
                            id: i + 1,
                            category: category.name,
                            referenceVideo: pexelsService.getBestVideoFile(videos[0]),
                            referencePoster: videos[0].image,
                            aiVideo: pexelsService.getBestVideoFile(videos[1]),
                            aiPoster: videos[1].image,
                            productIcon: videos[0].video_pictures[0]?.picture || videos[0].image
                        });
                    } else {
                        // Fallback when API returns no or insufficient results
                        allExamples.push({
                            id: i + 1,
                            category: category.name,
                            referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
                            referencePoster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
                            aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
                            aiPoster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=600&fit=crop',
                            productIcon: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=40&h=40&fit=crop'
                        });
                    }
                } catch (error) {
                    console.error(`Error fetching videos for ${category.name}:`, error);
                    // Fallback to placeholder
                    allExamples.push({
                        id: i + 1,
                        category: category.name,
                        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        referencePoster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
                        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        aiPoster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=600&fit=crop',
                        productIcon: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=40&h=40&fit=crop'
                    });
                }
            }

            setExamples(allExamples);
            setLoading(false);
        };

        fetchPexelsVideos();
    }, []);

    const displayed = showAll ? examples : examples.slice(0, 4);

    return (
        <section className="bg-black py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="aspect-[2/1] bg-gray-800 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {displayed.map((ex) => (
                                <ComparisonCard key={ex.id} example={ex} />
                            ))}
                        </div>
                        {!showAll && examples.length > 4 && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                                >
                                    Carregar mais
                                    <ChevronDown className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};
