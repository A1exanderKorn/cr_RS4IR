import React from 'react';
import Link from 'next/link';

export default function Authentication() {
  return (

    // <main className='flex flex-col items-center justify-start z-0 min-h-screen w-full bg-neutral-800'>

    //     <input type="text" placeholder='логин'/>
        

    //     <input type="text" placeholder='пароль'/>


        
    //     <button>Войти</button>
    //     <button>Зарегистироваться</button>
    // </main>
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
      <div>Приносим свои извинения! Данный функционал еще находится в стадии разработки</div>
    </main>
  )
}