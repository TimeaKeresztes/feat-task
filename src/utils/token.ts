import axios from 'axios'

export const setCSRFToken = async () => {
    await axios.get('/api/auth/csrf')
}
