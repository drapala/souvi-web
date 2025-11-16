'use client'

import { MapPin, X, Target } from 'lucide-react'

interface GeolocationModalProps {
  isOpen: boolean
  onAccept: () => void
  onDeny: () => void
}

export function GeolocationModal({ isOpen, onAccept, onDeny }: GeolocationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <button
              onClick={onDeny}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Encontrar seu público local
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A Souvi funciona melhor quando conhece sua localização. Isso nos ajuda a criar conteúdos que convertem especificamente na sua região.
          </p>
        </div>

        {/* Benefits */}
        <div className="px-6 pb-6">
          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Benefícios exclusivos:</span>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Conteúdos otimizados para sua cidade</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Horários de postagem ideais para sua região</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Linguagem que ressoa com seu público local</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={onAccept}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Compartilhar localização
            </button>
            <button
              onClick={onDeny}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors duration-200"
            >
              Continuar sem localização
            </button>
          </div>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 Sua privacidade é importante. Usamos sua localização apenas para personalizar conteúdos. Não compartilhamos com terceiros.
          </p>
        </div>
      </div>
    </div>
  )
}