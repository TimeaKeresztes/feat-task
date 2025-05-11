import axios from 'axios'
import type { User } from '../types/user'

const config = {
    method: 'get',
    url: '/api/auth/user',
    headers: {
        Referer: 'http://localhost:5173',
        'X-XSRF-TOKEN': '',
    },
}

export const validateUser = async (): Promise<{ data: User } | null> => {
    let userData = null
    await axios(config)
        .then(function (response) {
            if (response.status === 200) {
                userData = response.data
            }
        })
        .catch(function (error) {
            console.error(error)
        })

    return userData
}
