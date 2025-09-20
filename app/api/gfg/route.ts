import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    // Extract username from query string: /api/gfg?username=taufiq2fjol
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json(
        { error: 'Missing username parameter' },
        { status: 400 }
      );
    }

    // Fetch data from GFG API
    const res = await fetch(`https://geeks-for-geeks-api.vercel.app/${username}`, {
      // Disable caching to always get fresh data
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch GFG data: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Respond with JSON (CORS-safe because it’s your origin now)
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*', // optional if needed externally
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Server error', details: err.message },
      { status: 500 }
    );
  }
}
