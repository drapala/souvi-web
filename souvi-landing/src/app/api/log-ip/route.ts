import { NextRequest, NextResponse } from 'next/server'

interface LogData {
  ip?: string
  userAgent?: string
  timestamp?: string
  latitude?: number | null
  longitude?: number | null
  trigger?: string
  error?: string
}

function extractIPFromHeaders(request: NextRequest): string | null {
  const headers = [
    'x-forwarded-for',
    'cf-connecting-ip',
    'true-client-ip',
    'forwarded',
    'x-real-ip'
  ]

  for (const header of headers) {
    const value = request.headers.get(header)
    if (value) {
      // Handle comma-separated IPs (take the first one)
      const ip = value.split(',')[0].trim()

      // Basic IP validation
      if (isValidIP(ip)) {
        return ip
      }
    }
  }

  // Fallback to remote address header
  const remoteAddress = request.headers.get('remote-addr')
  if (remoteAddress && isValidIP(remoteAddress)) {
    return remoteAddress
  }

  return null
}

function isValidIP(ip: string): boolean {
  // IPv4 regex
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  // IPv6 regex (simplified)
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/

  // IPv6 compressed format
  const ipv6CompressedRegex = /^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/

  return ipv4Regex.test(ip) || ipv6Regex.test(ip) || ipv6CompressedRegex.test(ip)
}

function normalizeIP(ip: string): string {
  // Remove port if present
  const withoutPort = ip.split(':').slice(0, -1).join(':') || ip

  // Handle IPv6 in IPv4 format
  if (withoutPort.startsWith('::ffff:')) {
    return withoutPort.substring(7)
  }

  return withoutPort
}

export async function GET(request: NextRequest) {
  try {
    const ip = extractIPFromHeaders(request)
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const timestamp = new Date().toISOString()

    const logData = {
      ip: ip ? normalizeIP(ip) : 'Unknown',
      userAgent,
      timestamp,
      source: 'auto-detect'
    }

    // Log to console (replace with database save in production)
    console.log('IP Capture (Auto):', logData)

    return NextResponse.json({
      success: true,
      ip: logData.ip,
      timestamp: logData.timestamp
    })
  } catch (error) {
    console.error('Error in IP auto-capture:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to capture IP' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: LogData = await request.json()

    // Try to extract IP from headers first
    let finalIP = extractIPFromHeaders(request)

    // If no IP from headers, use the one from payload
    if (!finalIP && body.ip) {
      finalIP = body.ip
    }

    const userAgent = request.headers.get('user-agent') || body.userAgent || 'Unknown'
    const timestamp = body.timestamp || new Date().toISOString()

    const logData = {
      ip: finalIP ? normalizeIP(finalIP) : 'Unknown',
      userAgent,
      timestamp,
      latitude: body.latitude,
      longitude: body.longitude,
      trigger: body.trigger || 'unknown',
      source: body.ip ? 'fallback' : 'headers',
      referer: request.headers.get('referer') || 'Direct',
      error: body.error || null
    }

    // Log to console (replace with database save in production)
    console.log('IP Capture (Manual):', logData)

    // Here you would typically save to database
    // await saveToDatabase(logData)

    return NextResponse.json({
      success: true,
      ip: logData.ip,
      timestamp: logData.timestamp
    })
  } catch (error) {
    console.error('Error in IP manual capture:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process IP data' },
      { status: 500 }
    )
  }
}