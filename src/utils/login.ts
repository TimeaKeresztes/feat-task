import axios from 'axios'
import type { User } from '../types/user'

const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/api/auth/login',
}

export const login = async (email: string, password: string): Promise<{ data: User } | null> => {
    let userData = null
    await axios({ ...config, data: { email, password } })
        .then(function (response) {
            console.log(JSON.stringify(response.data))
            userData = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    return userData
}
