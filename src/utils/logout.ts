import axios from 'axios'

const config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url: '/api/auth/logout',
}

export const logout = async () => {
    await axios(config).catch(function (error) {
        console.error(error)
    })
}
