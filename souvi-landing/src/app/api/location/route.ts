import { NextRequest, NextResponse } from 'next/server'

interface LocationData {
  latitude?: number
  longitude?: number
  accuracy?: number
  gpsAllowed?: boolean
  error?: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const body: LocationData = await request.json()

    const logData = {
      ...body,
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
          request.headers.get('cf-connecting-ip') ||
          request.headers.get('true-client-ip') ||
          'Unknown'
    }

    console.log('Real GPS Data:', logData)

    return NextResponse.json({
      success: true,
      timestamp: logData.timestamp
    })
  } catch (error) {
    console.error('Error logging GPS data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to log GPS data' },
      { status: 500 }
    )
  }
}