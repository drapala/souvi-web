'use client'

import { useState, useEffect } from 'react'

interface GeolocationState {
  latitude: number | null
  longitude: number | null
  error: string | null
  loading: boolean
  showModal: boolean
  hasPermission: boolean | null
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
    showModal: false,
    hasPermission: null
  })

  const LOCAL_STORAGE_KEY = 'souvi-geolocation-denied'

  const logLocationData = async (data: any) => {
    try {
      await fetch('/api/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.error('Failed to log location data:', error)
    }
  }

  const requestGeolocation = () => {
    setState(prev => ({ ...prev, loading: true, showModal: false }))

    if (!navigator.geolocation) {
      const errorData = {
        gpsAllowed: false,
        error: 'not_supported',
        timestamp: new Date().toISOString()
      }
      logLocationData(errorData)
      setState(prev => ({
        ...prev,
        error: 'Geolocalização não suportada',
        loading: false,
        hasPermission: false
      }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const successData = {
          latitude,
          longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date().toISOString()
        }

        logLocationData(successData)

        setState(prev => ({
          ...prev,
          latitude,
          longitude,
          error: null,
          loading: false,
          hasPermission: true,
          showModal: false
        }))
      },
      (error) => {
        let reason = 'no_gps'

        if (error.code === error.PERMISSION_DENIED) {
          reason = 'permission_denied'
          localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
        }

        const errorData = {
          gpsAllowed: false,
          error: reason,
          timestamp: new Date().toISOString()
        }

        logLocationData(errorData)

        setState(prev => ({
          ...prev,
          error: 'GPS não disponível',
          loading: false,
          hasPermission: false,
          showModal: false
        }))
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )
  }

  const handleDenyLocation = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'true')

    const denyData = {
      gpsAllowed: false,
      error: 'user_denied',
      timestamp: new Date().toISOString()
    }

    logLocationData(denyData)

    setState(prev => ({
      ...prev,
      showModal: false,
      hasPermission: false,
      loading: false
    }))
  }

  useEffect(() => {
    const hasUserDenied = localStorage.getItem(LOCAL_STORAGE_KEY) === 'true'

    if (hasUserDenied) {
      setState(prev => ({
        ...prev,
        loading: false,
        hasPermission: false,
        showModal: false
      }))
      return
    }

    if (!navigator.geolocation) {
      const errorData = {
        gpsAllowed: false,
        error: 'not_supported',
        timestamp: new Date().toISOString()
      }
      logLocationData(errorData)
      setState(prev => ({
        ...prev,
        error: 'Geolocalização não suportada',
        loading: false,
        hasPermission: false
      }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const successData = {
          latitude,
          longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date().toISOString()
        }

        logLocationData(successData)

        setState(prev => ({
          ...prev,
          latitude,
          longitude,
          error: null,
          loading: false,
          hasPermission: true,
          showModal: false
        }))
      },
      () => {
        setState(prev => ({
          ...prev,
          loading: false,
          showModal: true
        }))
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )
  }, [])

  return {
    ...state,
    requestGeolocation,
    handleDenyLocation
  }
}