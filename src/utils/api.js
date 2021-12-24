import axios from 'axios'
import Papa from 'papaparse'

const getProducts = async (url) => {
  return axios
    .get(url, {
      responseType: 'blob'
    })
    .then((response) => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error.message)
        })
      })
    })
}

export default getProducts
