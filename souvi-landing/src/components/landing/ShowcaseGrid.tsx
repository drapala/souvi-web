import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ComparisonCard } from './ComparisonCard';

type Example = {
    id: number;
    category: string;
    referenceVideo: string;
    referencePoster: string;
    aiVideo: string;
    aiPoster: string;
    productIcon: string; // URL for product overlay image/icon
};

const examples: Example[] = [
    {
        id: 1,
        category: 'Makeup',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?makeup',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?makeup',
        productIcon: 'https://source.unsplash.com/40x40?makeup',
    },
    {
        id: 2,
        category: 'Consumer Electronics',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?electronics',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?electronics',
        productIcon: 'https://source.unsplash.com/40x40?electronics',
    },
    {
        id: 3,
        category: 'Beverages',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?beverage',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?beverage',
        productIcon: 'https://source.unsplash.com/40x40?beverage',
    },
    {
        id: 4,
        category: 'Outdoor Equipment',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?outdoor',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?outdoor',
        productIcon: 'https://source.unsplash.com/40x40?outdoor',
    },
    {
        id: 5,
        category: 'Accessories',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?accessories',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?accessories',
        productIcon: 'https://source.unsplash.com/40x40?accessories',
    },
    {
        id: 6,
        category: 'Jewelry',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?jewelry',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?jewelry',
        productIcon: 'https://source.unsplash.com/40x40?jewelry',
    },
    {
        id: 7,
        category: 'Fragrances',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?fragrance',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?fragrance',
        productIcon: 'https://source.unsplash.com/40x40?fragrance',
    },
    {
        id: 8,
        category: 'Mobile Apps',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?mobile',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?mobile',
        productIcon: 'https://source.unsplash.com/40x40?mobile',
    },
    {
        id: 9,
        category: 'Supplements',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?supplement',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?supplement',
        productIcon: 'https://source.unsplash.com/40x40?supplement',
    },
    {
        id: 10,
        category: 'Bags',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?bag',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?bag',
        productIcon: 'https://source.unsplash.com/40x40?bag',
    },
    {
        id: 11,
        category: 'Footwear',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?shoes',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?shoes',
        productIcon: 'https://source.unsplash.com/40x40?shoes',
    },
    {
        id: 12,
        category: 'Eyewear',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?eyewear',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?eyewear',
        productIcon: 'https://source.unsplash.com/40x40?eyewear',
    },
    {
        id: 13,
        category: 'Food & Beverage',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?food',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?food',
        productIcon: 'https://source.unsplash.com/40x40?food',
    },
    {
        id: 14,
        category: 'Pet Food',
        referenceVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        referencePoster: 'https://source.unsplash.com/featured/400x600?petfood',
        aiVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aiPoster: 'https://source.unsplash.com/featured/400x600?petfood',
        productIcon: 'https://source.unsplash.com/40x40?petfood',
    },
];

export const ShowcaseGrid = () => {
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? examples : examples.slice(0, 4);

    return (
        <section className="bg-black py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayed.map((ex) => (
                        <ComparisonCard key={ex.id} example={ex} />
                    ))}
                </div>
                {!showAll && (
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
            </div>
        </section>
    );
};
