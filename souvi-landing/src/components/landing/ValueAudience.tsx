import React from 'react'
import { Users, Crown, ShoppingBag, Building2 } from 'lucide-react'

export const ValueAudience = () => {
    // Data for Block 1: Impact Metrics
    const metrics = [
        {
            id: 1,
            value: "10X",
            desc: "faster video production. From weeks to minutes."
        },
        {
            id: 2,
            value: "80-90%",
            desc: "cost savings. High-quality videos without the agency price tag."
        },
        {
            id: 3,
            value: "0",
            desc: "learning curve. Anyone can start creating immediately."
        }
    ]

    // Data for Block 2: Target Audience
    const audience = [
        {
            id: 1,
            title: "Affiliate Marketers",
            desc: "Stay ahead of competition with rapid content creation.",
            icon: <Users className="w-6 h-6 text-blue-500" />
        },
        {
            id: 2,
            title: "DTC Brands",
            desc: "Launch campaigns faster and test creatives efficiently.",
            icon: <Crown className="w-6 h-6 text-blue-500" />
        },
        {
            id: 3,
            title: "E-commerce Sellers",
            desc: "Turn listings into showcases that convert browsers to buyers.",
            icon: <ShoppingBag className="w-6 h-6 text-blue-500" />
        },
        {
            id: 4,
            title: "Agencies",
            desc: "Deliver more content, faster, and scale your client base.",
            icon: <Building2 className="w-6 h-6 text-blue-500" />
        }
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Block 1: Impact Metrics (High Contrast) */}
                <div className="mb-40">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Create marketing videos 10x faster – at a fraction of the cost
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Marketing videos shouldn't take weeks. Automate your workflow and focus on strategy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {metrics.map((metric) => (
                            <div
                                key={metric.id}
                                className="bg-white rounded-3xl p-10 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:py-20 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <span className="text-6xl md:text-7xl font-bold text-blue-600 mb-6">
                                    {metric.value}
                                </span>
                                <p className="text-gray-600 text-xl font-medium leading-relaxed max-w-[80%]">
                                    {metric.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Block 2: Target Audience (Dark Outline Style) */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            From Solopreneurs to Global Brands
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Scalable solutions for every stage of growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {audience.map((item) => (
                            <div
                                key={item.id}
                                className="border border-zinc-800 rounded-xl p-8 bg-transparent hover:border-zinc-600 transition-colors duration-300 flex flex-col items-start h-full"
                            >
                                <div className="mb-6 p-3 bg-blue-500/10 rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
