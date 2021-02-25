import axios from 'axios'

const
    BASE = 'https://bender-blog.herokuapp.com'

export const get = async () => await axios.get(`${BASE}/posts`)