import { FormEvent } from "react";
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { useRef } from "react";


export default function Auth() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: formData,
    })

    // const data = await response.json()

    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="login"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}


