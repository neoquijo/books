import axios from "axios"

const api = axios.create({

  baseURL: `http://localhost:8080/api`
});


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = token
  }
  return config;
});


export const fetchBooksByName = async (query) => {

  try {
    if (query && query.length > 0) {
      const data = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&langRestrict=ru&maxResults=40&orderBy=relevance')
      return data.data.items
    } else return []

  } catch (error) {
    return []
  }

}

export const fetchSingleBook = async (id) => {
  try {
    if (id) {
      const data = await axios.get('https://www.googleapis.com/books/v1/volumes/' + id)
      return data.data
    } else return null
  } catch (error) {
    return null
  }
}

export const doLogin = async (login, password) => {
  try {
    const res = await api.post('/doLogin', { login, password })

    return res.data


  } catch (error) {


    return new Error(error)

  }
}
