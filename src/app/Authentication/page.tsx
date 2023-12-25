import React from 'react';
import Link from 'next/link';

export default function Authentication() {
  return (
    <main className='flex flex-col items-center justify-start z-0 min-h-screen w-full bg-neutral-800'>

        <input type="text" placeholder='логин'/>
        

        <input type="text" placeholder='пароль'/>


        
        <button>Войти</button>
        <button>Зарегестироваться</button>
    </main>
  )
}