"use client"

import { useActionState } from "react"
import { prompt } from "./actions"

export default function Home() {
  const [state, action] = useActionState(prompt, "")

  return (
    <>
      <h1>Home</h1>
      <p>{state}</p>

      <form action={action}>
        <input name="input" />
        <button>Submit</button>
      </form>
    </>
  )
}
