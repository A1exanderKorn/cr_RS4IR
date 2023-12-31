import React from 'react';
import Link from 'next/link';
import { createTableRelationsHelpers } from 'drizzle-orm';

export const revalidate = 0;

let now_hero = ""

export default async function Heroes() {
  
  const response = await fetch('http://localhost:3000/api/talents_overview', {
    cache: "no-cache",
  });
  const talents = await response.json();
  return (
    <main className="flex flex-col items-center justify-start z-0 min-h-screen w-full bg-neutral-800">
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 p-0 font-bold">
        <Link href='./'>
          Главная 
        </Link>
        <Link href='./Heroes'>
          Герои 
        </Link>
        <Link href='./Support'>
          Обратная связь
        </Link>
        <Link href='./Auth'>
          Профиль
        </Link>
      </div>
      <h3 className='my-3'>Таланты:</h3>
      <ul>
        {talents.map((row) => (
          <li key={row.id} className='my-3'>
            
          <p>hero: {row.hero}</p>
          <p>{row.spell}: {row.name}</p>
            
          </li>
        ))}
        
      </ul>
    </main>
    
  )
}