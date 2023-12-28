import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SAPABASE_URL!,
    process.env.NEXT_PUBLIC_SAPABASE_KEY!
    );

  const { data } = await supabase.from('Talents_overview').select();
  
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { note } = await request.json();
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SAPABASE_URL!,
    process.env.NEXT_PUBLIC_SAPABASE_KEY!
  );  
  const { data } = await supabase.from('feedback').insert([{ note },]).select();

  return NextResponse.json(data);
}

// export async function POST(request: Request) {
  
// const supabase = createClient(
//   'https://lvnnhjbjncxsgnimjlwe.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bm5oamJqbmN4c2duaW1qbHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDY2ODIsImV4cCI6MjAxODkyMjY4Mn0._PaNelhdrsmKIMQ-zV_D3wkBHhagZBQYw75oov_ZXqo'
//   );

// const { data } = await supabase.from('Talents_overview').select();

// return NextResponse.json(data);

// }
