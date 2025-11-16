'use client'

import React from 'react'
import { MessageCircle, Zap, Target, Brain, CheckCircle, Star, ArrowRight, Play, Sparkles } from 'lucide-react'
import { useGeolocation } from '@/hooks/useGeolocation'
import { useIPCapture } from '@/hooks/useIPCapture'
import { GeolocationModal } from '@/components/GeolocationModal'
import { PrivacyBanner } from '@/components/PrivacyBanner'

export default function Home() {
  const { showModal, requestGeolocation, handleDenyLocation, latitude, longitude } = useGeolocation()
  const { captureOnCTA, captureWithGeo } = useIPCapture()

  React.useEffect(() => {
    if (latitude !== null && longitude !== null) {
      captureWithGeo({ latitude, longitude })
    }
  }, [latitude, longitude, captureWithGeo])

  const handleCTAClick = () => {
    // Capture IP with current geolocation data
    captureOnCTA({ latitude, longitude })
    // Add your CTA logic here (redirect to WhatsApp, etc.)
    console.log('CTA clicked - redirecting to WhatsApp...')
  }
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-800 mb-8">
              <Sparkles className="w-4 h-4" />
              {latitude && longitude ?
                `AI Creative Factory otimizada para sua região` :
                'AI Creative Factory para PMEs'
              }
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              Seu marketing,{" "}
              <span className="text-green-500">resolvido</span>.
              <br />
              No WhatsApp.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              A Souvi cria vídeos, artes e anúncios automaticamente — para PMEs que querem vender mais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCTAClick}
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Quero testar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 text-gray-700 font-semibold px-6 py-4 hover:text-gray-900 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Ver demonstração
              </button>
            </div>

            <div className="mt-16 relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-4xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-600 font-medium">Demo em vídeo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 passos simples para revolucionar seu marketing
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Envie seu produto",
                description: "Mande fotos, descrição ou link do produto via WhatsApp"
              },
              {
                step: "02",
                title: "Receba conteúdos prontos",
                description: "IA cria vídeos, imagens e copies personalizados em minutos"
              },
              {
                step: "03",
                title: "Publique onde quiser",
                description: "Use no Instagram, Facebook, TikTok ou onde fizer sentido"
              },
              {
                step: "04",
                title: "Souvi aprende",
                description: "A IA otimiza baseada no que funciona no seu bairro"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full text-xl font-black mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Por que escolher a Souvi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que sua PME precisa para dominar o marketing digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Criação instantânea",
                description: "Vídeos e imagens prontos em minutos, não dias"
              },
              {
                icon: Brain,
                title: "IA com neurociência",
                description: "Copies baseados em dados de comportamento local"
              },
              {
                icon: Target,
                title: "Otimização automática",
                description: "Aprende o que funciona no seu mercado específico"
              },
              {
                icon: MessageCircle,
                title: "100% via WhatsApp",
                description: "Zero apps, zero complicação. Só conversar"
              },
              {
                icon: CheckCircle,
                title: "Zero curva de aprendizado",
                description: "Qualquer pessoa consegue usar imediatamente"
              },
              {
                icon: Sparkles,
                title: "Qualidade profissional",
                description: "Resultados que competem com agências caras"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-green-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Nossos clientes estão vendendo mais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Maria Silva",
                business: "Boutique Estilo Próprio",
                content: "Em 2 semanas aumentei 300% o engajamento. A Souvi entende exatamente o que minha clientela quer ver.",
                rating: 5
              },
              {
                name: "Carlos Mendes",
                business: "Hamburgueria do Bairro",
                content: "Nunca pensei que conseguiria fazer vídeos profissionais. Agora faço 10 por semana sem esforço.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-900 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis. Escale quando quiser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Básico",
                price: "Grátis",
                description: "Para testar e começar",
                features: ["5 criações por mês", "Formatos básicos", "Suporte via WhatsApp"],
                cta: "Começar grátis",
                highlighted: false
              },
              {
                name: "Pro",
                price: "R$ 97/mês",
                description: "Para PMEs em crescimento",
                features: ["50 criações por mês", "Todos os formatos", "IA otimizada", "Suporte prioritário"],
                cta: "Escolher Pro",
                highlighted: true
              },
              {
                name: "Studio",
                price: "R$ 297/mês",
                description: "Para agências e empresas",
                features: ["Criações ilimitadas", "White-label", "API personalizada", "Account manager"],
                cta: "Falar com vendas",
                highlighted: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.highlighted ? 'border-green-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Mais popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTAClick}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto para revolucionar seu marketing?
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Comece grátis agora. Sem cartão de crédito. Sem complicação.
            </p>
            <button
              onClick={handleCTAClick}
              className="group bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-4 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Começar no WhatsApp agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-black text-white mb-6">SOUVI</div>

            {/* Informações Legais */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-white mb-4">Informações Legais</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>
                  <strong>Razão Social:</strong><br />
                  Drapala Technology Solutions Ltda
                </div>
                <div>
                  <strong>CNPJ:</strong><br />
                  57.508.298/0001-62
                </div>
                <div>
                  <strong>Endereço:</strong><br />
                  São Paulo, SP - Brasil
                </div>
              </div>
            </div>

            <p className="text-gray-400">
              © 2024 Souvi. Todos os direitos reservados. Feito com ❤️ para PMEs brasileiras.
            </p>
          </div>
        </div>
      </footer>

      {/* Geolocation Modal */}
      <GeolocationModal
        isOpen={showModal}
        onAccept={requestGeolocation}
        onDeny={handleDenyLocation}
      />

      {/* Privacy Banner */}
      <PrivacyBanner />
    </main>
  )
}