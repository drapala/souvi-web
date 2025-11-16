'use client'

import { useState, useEffect } from 'react'
import { X, Shield } from 'lucide-react'

export function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('souvi-privacy-banner-dismissed')
    if (!bannerDismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('souvi-privacy-banner-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield className="w-4 h-4 text-blue-600" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 leading-relaxed">
              Coletamos dados de navegação (como IP e localização aproximada) para melhorar recomendações locais.
            </p>

            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleDismiss}
                className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Entendi
              </button>
              <span className="text-xs text-gray-500">
                Sua privacidade é importante
              </span>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}