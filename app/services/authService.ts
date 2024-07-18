import { isLoggedInAtom } from '@/app/stores/store'
import { useAtom } from 'jotai'
import users from './users.json'

export const useAuthService = () => {
    const [, setIsLoggedIn] = useAtom(isLoggedInAtom)

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate fetching user data from a database
        const user = users.find(
            user => user.email === email && user.password === password
        )

        if (user) {
            setIsLoggedIn(true)
            return true
        } else {
            setIsLoggedIn(false)
            return false
        }
    }

    return { login }
}
