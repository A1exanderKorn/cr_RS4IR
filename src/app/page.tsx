import { useState } from 'react'
import Image from 'next/image'
import MainPage from './MainPage'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start z-0 min-h-screen min-w-full bg-black p-0 ">
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 bg-black p-0">
        <a className=''>
          Главная
        </a>
        <a className=''>
          Герои
        </a>
        <a className=''>
          Рейтинг
        </a>
        <a className=''>
          Профиль
        </a>
      </div>
      <div className=''>
      <MainPage></MainPage>
      </div>
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 bg-black p-0">
        Контакты
      </div>
    </main>
  )
}
