import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

 export const fetchApi = async (url) => {
     const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6dce4f1813mshc87cb80b9ec3143p14b126jsne6f43eebe058'
          }
     })
     return data
 }