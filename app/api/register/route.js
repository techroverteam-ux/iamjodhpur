import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Get existing registrations from localStorage (client-side will handle this)
    // For now, just return success
    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function GET() {
  // This will be called from admin dashboard
  return NextResponse.json({ success: true, registrations: [] })
}