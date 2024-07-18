"use client"

import { useChat } from "ai/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { isLoggedInAtom } from '@/app/stores/store'

export default function Chat() {

  const [isLoggedIn] = useAtom(isLoggedInAtom)
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/auth/login')
    }
  },[isLoggedIn,router])

  // console.log(process.env.NODE_ENV)
  const { messages,input,handleInputChange,handleSubmit } = useChat()

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div
          key={message.id}
          className="whitespace-pre-wrap"
          style={{ color: message.role === "user" ? "black" : "green" }}
        >
          <strong>{`${message.role === "user" ? "You" : "Assistant"}: `}</strong>
          {message.content}
          <br />
          <br />
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask me anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
