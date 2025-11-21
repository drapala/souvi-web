'use client';
import React, { useRef } from 'react';
import { VolumeX } from 'lucide-react';

type Example = {
    category: string;
    referenceVideo: string;
    referencePoster: string;
    aiVideo: string;
    aiPoster: string;
    productIcon: string;
};

type Props = {
    example: Example;
};

export const ComparisonCard: React.FC<Props> = ({ example }) => {
    const refVideoRef = useRef<HTMLVideoElement>(null);
    const aiVideoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        refVideoRef.current?.play();
        aiVideoRef.current?.play();
    };

    const handleMouseLeave = () => {
        if (refVideoRef.current) {
            refVideoRef.current.pause();
            refVideoRef.current.currentTime = 0;
        }
        if (aiVideoRef.current) {
            aiVideoRef.current.pause();
            aiVideoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="border border-gray-700 rounded-2xl overflow-hidden bg-gray-900"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3 className="text-center text-white text-lg font-medium py-4">
                {example.category}
            </h3>

            <div className="flex flex-col md:flex-row">
                {/* Reference */}
                <div className="relative w-full md:w-1/2">
                    <video
                        ref={refVideoRef}
                        src={example.referenceVideo}
                        poster={example.referencePoster}
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm text-white">
                        <VolumeX className="w-4 h-4" />
                        Referência
                    </div>
                </div>

                {/* AI Recreated */}
                <div className="relative w-full md:w-1/2">
                    <video
                        ref={aiVideoRef}
                        src={example.aiVideo}
                        poster={example.aiPoster}
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 left-2 bg-white rounded-md p-1 shadow">
                        <img src={example.productIcon} alt="product" className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm text-white">
                        <VolumeX className="w-4 h-4" />
                        Recriado por IA
                    </div>
                </div>
            </div>
        </div>
    );
};
