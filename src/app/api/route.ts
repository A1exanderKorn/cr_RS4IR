import { NextResponse } from "next/server"

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lvnnhjbjncxsgnimjlwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bm5oamJqbmN4c2duaW1qbHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDY2ODIsImV4cCI6MjAxODkyMjY4Mn0._PaNelhdrsmKIMQ-zV_D3wkBHhagZBQYw75oov_ZXqo'
const supabase = createClient(supabaseUrl, supabaseKey)



// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    // const res = await fetch('https://', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'API-Key': process.env.DATA_API_KEY,
    //     },
    //   })
    //   const data = await res.json()

     //return data
      return NextResponse.json({ message: 'Hello world!' })

}

export async function POST(request: Request) {
  // const res = await fetch('https://', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  const res = await request.json()

  const data = await res.json()
  
   
  return NextResponse.json({ data })

}