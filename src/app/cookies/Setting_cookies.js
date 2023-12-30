'use server'

import { cookies } from 'next/headers'
 
export default async function create(data) {
    cookies().set('name', 'lee')
    // or
    cookies().set('name', 'lee', { secure: true })
    // or
    cookies().set({
      name: 'name',
      value: 'lee',
      httpOnly: true,
      path: '/',
    })
  }