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
      {/* <MainPage></MainPage> */}
      <div className="flex flex-column items-center justify-start z-1 w-full p-2">
        <img src='' className='w-1/2 h-64 py-2'></img>
        <p>Приветствую вас на сайте кастомки Dota3x3! Наш игровой проект представляет из себя абсолютно новый игровой режим, в котором вы все еще играете за знакомых героев из Dota 2.</p>
        <img src='' className='w-1/2 h-64 py-2'></img>
        <p>Правила кастомки:</p>
        <p>
          В нашем игровом режиме вы в команде из 3х человек противостоите команде противника. У каждой из команд есть база, на которой находится всем известный трон, две вышки и три телепорта на арену.
          Чтобы победить, вам необходимо сломать трон противника. На пути к трону противника лежит 6 вышек: по 2 на каждой линии. Между базами игроков есть 4 богатые зоны с более ценными крипами и руны, контроль над которыми
          во многом определяет победителя.
        </p>
        <p>Новая механика: арены</p>
        <p>У каждой команды есть 3 арены, доступные только им.</p>
      </div>
      </div>
      <div className="flex flex-row items-center justify-around z-1 w-full h-20 bg-black p-0">
        Контакты
      </div>
    </main>
  )
}
