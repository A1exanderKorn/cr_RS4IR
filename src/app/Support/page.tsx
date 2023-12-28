import React from 'react';
import Link from 'next/link';
import NewNote from '../New-note';

export const revalidate = 0;

export default async function Support() {
  
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
      <div className='my-6'>Форма для обратной связи</div>
      
      <NewNote />

    </main>
    
  )
}