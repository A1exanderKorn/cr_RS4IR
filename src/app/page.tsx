import { useState } from 'react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Heroes from './Heroes/page'
import Link from 'next/link';
import React from 'react';
import Auth from './Auth';


export default function Home() {
  const cookieStore = cookies()
  const access_token = cookieStore.get('access_token')
  // if(access_token == null){
  //   return(
  //     <Auth/>
  //   )
  // }
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
      
      <div className="flex flex-col items-end justify-center items-center z-1 p-2 flex-nowrap w-3/5 gap-6">
        <img src='' className=' h-auto py-2'></img>
        
        <p className=' text-justify'>Приветствую вас на сайте кастомки Dota3x3! Наш игровой проект представляет из себя абсолютно новый игровой режим, в котором вы все еще играете за знакомых героев из Dota 2.</p>
        <img src='' className=' h-auto py-2'></img>
        <p className=' text-center'>Правила кастомки:</p>
        <p className=' text-justify'>
          В нашем игровом режиме вы в команде из 3х человек противостоите команде противника. У каждой из команд есть база, на которой находится всем известный трон, две вышки и три телепорта на арену.
          Чтобы победить, вам необходимо сломать трон противника. На пути к трону противника лежит 6 вышек: по 2 на каждой линии. Между базами игроков есть 4 богатые зоны с более ценными крипами и руны, контроль над которыми
          во многом определяет победителя.
        </p>
        <p className=' text-center'>Новая механика - арены:</p>
        <p className=' text-justify'>У каждой команды есть 3 арены, доступные только им.</p>
      </div>
      
    </main>
  )
}

