'use client'

import { useState, useEffect, useRef } from 'react'

interface IPCaptureResult {
  success: boolean
  ip?: string
  timestamp?: string
  error?: string
}

export function useIPCapture() {
  const [captured, setCaptured] = useState(false)
  const [loading, setLoading] = useState(false)
  const captureAttempted = useRef(false)

  const captureIP = async (trigger: 'page-load' | 'cta-click' = 'page-load', geoData?: { latitude: number | null, longitude: number | null }) => {
    if (loading) return
    setLoading(true)

    try {
      // First try: Auto-detect from server headers
      const autoResponse = await fetch('/api/log-ip', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const autoResult: IPCaptureResult = await autoResponse.json()

      if (autoResult.success && autoResult.ip && autoResult.ip !== 'Unknown') {
        console.log(`IP captured (${trigger}):`, autoResult.ip)
        setCaptured(true)
        setLoading(false)
        return autoResult
      }

      // Fallback: Use external service
      const fallbackResponse = await fetch('https://api.ipify.org?format=json')
      const fallbackData = await fallbackResponse.json()

      if (fallbackData.ip) {
        // Send the IP to our backend
        const manualResponse = await fetch('/api/log-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ip: fallbackData.ip,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            trigger,
            latitude: geoData?.latitude || null,
            longitude: geoData?.longitude || null
          })
        })

        const manualResult: IPCaptureResult = await manualResponse.json()
        console.log(`IP captured via fallback (${trigger}):`, fallbackData.ip)
        setCaptured(true)
        setLoading(false)
        return manualResult
      }

      throw new Error('No IP could be determined')

    } catch (error) {
      console.error('IP capture failed:', error)
      setLoading(false)

      // Still log the attempt without IP
      try {
        await fetch('/api/log-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ip: 'Failed to capture',
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            trigger,
            latitude: geoData?.latitude || null,
            longitude: geoData?.longitude || null,
            error: error instanceof Error ? error.message : 'Unknown error'
          })
        })
      } catch (logError) {
        console.error('Failed to log capture attempt:', logError)
      }

      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  // Auto-capture on component mount
  useEffect(() => {
    if (!captureAttempted.current) {
      captureAttempted.current = true

      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        captureIP('page-load')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const captureOnCTA = (geoData?: { latitude: number | null, longitude: number | null }) => {
    captureIP('cta-click', geoData)
  }

  const captureWithGeo = (geoData: { latitude: number | null, longitude: number | null }) => {
    captureIP('page-load', geoData)
  }

  return {
    captured,
    loading,
    captureOnCTA,
    captureWithGeo
  }
}