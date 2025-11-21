import React from 'react'
import { Star } from 'lucide-react'

export const AuthenticReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Sanket Bhoirkar",
            text: "Best AI Generated UGC Product Video. The quality is unmatched and the speed is incredible.",
            initials: "SB",
            color: "bg-blue-500"
        },
        {
            id: 2,
            name: "Wei Siang Lim",
            text: "Great app for Ecom and Dropshipping. Saved me thousands on content creation.",
            initials: "WL",
            color: "bg-green-500"
        },
        {
            id: 3,
            name: "Van Long",
            text: "Topview delivers a refreshingly no-nonsense experience. Exactly what I needed.",
            initials: "VL",
            color: "bg-purple-500"
        },
        {
            id: 4,
            name: "Md. Obaydul Islam",
            text: "Incredible tool for scaling ad creatives. The avatars look hyper-realistic.",
            initials: "MI",
            color: "bg-orange-500"
        },
        {
            id: 5,
            name: "Zoltan Baranyai",
            text: "A game changer for small businesses. Professional marketing videos in minutes.",
            initials: "ZB",
            color: "bg-red-500"
        },
        {
            id: 6,
            name: "Ernest Dents",
            text: "The best investment for my marketing strategy this year. Highly recommended.",
            initials: "ED",
            color: "bg-teal-500"
        },
        {
            id: 7,
            name: "Simone Castelletti",
            text: "Finally an AI video tool that actually understands marketing psychology.",
            initials: "SC",
            color: "bg-indigo-500"
        },
        {
            id: 8,
            name: "Edward",
            text: "Simple, fast, and effective. My ROAS has increased significantly since using this.",
            initials: "E",
            color: "bg-pink-500"
        }
    ]

    const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
        <div className="w-[350px] md:w-[400px] bg-zinc-900 rounded-xl p-6 flex-shrink-0 mx-4 border border-zinc-800">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed h-20 overflow-hidden">
                "{review.text}"
            </p>
            <div className="border-t border-zinc-800 pt-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {review.initials}
                </div>
                <span className="text-white font-bold text-sm">{review.name}</span>
            </div>
        </div>
    )

    return (
        <section className="bg-black py-24 overflow-hidden">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Authentic User Reviews
                </h2>
                <p className="text-gray-400">
                    Join thousands of satisfied creators and brands.
                </p>
            </div>

            {/* Top Row: Right to Left */}
            <div className="flex mb-8 overflow-hidden w-full">
                <div className="flex animate-marquee">
                    {reviews.map((review) => (
                        <ReviewCard key={`top-1-${review.id}`} review={review} />
                    ))}
                    {reviews.map((review) => (
                        <ReviewCard key={`top-2-${review.id}`} review={review} />
                    ))}
                </div>
            </div>

            {/* Bottom Row: Left to Right */}
            <div className="flex overflow-hidden w-full">
                <div className="flex animate-marquee-reverse">
                    {reviews.slice().reverse().map((review) => (
                        <ReviewCard key={`bottom-1-${review.id}`} review={review} />
                    ))}
                    {reviews.slice().reverse().map((review) => (
                        <ReviewCard key={`bottom-2-${review.id}`} review={review} />
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 80s linear infinite;
          width: max-content;
          /* Start from -50% so it looks like it's moving right from a filled state */
          transform: translateX(-50%); 
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}
