"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { isLoggedInAtom } from '@/app/stores/store'
import { z } from 'zod'

// Schema for email and password validation
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format." }),
    password: z.string()
        .min(8,{ message: "Password must be at least 8 characters long." })
        .regex(/(?=.*[!@#$%^&*])/,{ message: "Password must contain at least one special character." }),
})

export default function Login() {
    const [,setIsLoggedIn] = useAtom(isLoggedInAtom)
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [emailError,setEmailError] = useState<string>('')
    const [passwordError,setPasswordError] = useState<string>('')
    const [loginError,setLoginError] = useState<string>('')
    const router = useRouter()

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEmailError('')
        setPasswordError('')
        setLoginError('')

        // Validate form data
        try {
            loginSchema.parse({
                email: email,
                password: password
            })

            // Dummy credentials
            const hardcodedEmail = 'user@example.com'
            const hardcodedPassword = 'secure!password123'

            if (email === hardcodedEmail && password === hardcodedPassword) {
                setIsLoggedIn(true)
                router.replace('/')
            } else {
                setLoginError('Invalid email or password')
            }
        } catch (e) {
            if (e instanceof z.ZodError) {
                e.errors.forEach(error => {
                    if (error.path[0] === 'email') {
                        setEmailError(error.message)
                    } else if (error.path[0] === 'password') {
                        setPasswordError(error.message)
                    }
                })
            }
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-16 w-auto"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                            </div>
                        </div>

                        {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
