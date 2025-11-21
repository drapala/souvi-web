import React from 'react'

const audiences = [
    { title: "Lojas de Bairro", desc: "Atraia clientes locais com anúncios geolocalizados." },
    { title: "Franquias", desc: "Mantenha padrão visual em todas as unidades." },
    { title: "Influenciadoras", desc: "Produza conteúdo publi em escala industrial." },
    { title: "Pequenos E-commerce", desc: "Vídeos de produto sem enviar amostras." },
    { title: "Vendedoras", desc: "Material profissional para status e grupos." },
    { title: "Restaurantes", desc: "Food porn que dá água na boca instantânea." },
    { title: "Clínicas", desc: "Transmita autoridade e resultados reais." },
    { title: "Academias", desc: "Mostre a vibe e os treinos com energia." }
]

export const AudienceSection = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                        De microempreendedores a grandes marcas
                    </h2>
                    <p className="text-xl text-gray-600">
                        A Souvi funciona para quem precisa vender.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {audiences.map((item, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group border border-transparent hover:border-green-100">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
