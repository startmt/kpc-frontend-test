import axios from 'axios'
export const getUserApi = () =>{
    return axios.get('http://dummy.restapiexample.com/api/v1/employees')
    // return axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
}