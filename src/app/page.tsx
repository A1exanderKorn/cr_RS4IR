import { useState } from 'react'
import Image from 'next/image'
import Heroes from './Heroes'
import Link from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start z-0 min-h-screen w-full bg-neutral-800">
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 p-0">
        
        <a className=''> Главная </a>
        
        <Link href='./Heroes'>
          <a className=''> Герои </a>
        </Link>
        
        <a className=''>
          Рейтинг
        </a>
        <a className=''>
          Профиль
        </a>
      </div>
      
      <div className="flex flex-col items-end justify-center items-center z-1 p-2 w-auto flex-nowrap">
        <img src='' className='w-3/5 h-auto py-2 my-3'></img>
        
        <p className='w-3/5 text-justify my-3'>Приветствую вас на сайте кастомки Dota3x3! Наш игровой проект представляет из себя абсолютно новый игровой режим, в котором вы все еще играете за знакомых героев из Dota 2.</p>
        <img src='' className='w-3/5 h-auto py-2 my-3'></img>
        <p className='w-3/5 text-center my-3'>Правила кастомки:</p>
        <p className='w-3/5 text-justify my-3'>
          В нашем игровом режиме вы в команде из 3х человек противостоите команде противника. У каждой из команд есть база, на которой находится всем известный трон, две вышки и три телепорта на арену.
          Чтобы победить, вам необходимо сломать трон противника. На пути к трону противника лежит 6 вышек: по 2 на каждой линии. Между базами игроков есть 4 богатые зоны с более ценными крипами и руны, контроль над которыми
          во многом определяет победителя.
        </p>
        <p className='w-3/5 text-center my-3'>Новая механика - арены:</p>
        <p className='w-3/5 text-justify my-3'>У каждой команды есть 3 арены, доступные только им.</p>
      </div>
      
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 p-0">
        Контакты
      </div>
    </main>
  )
}

