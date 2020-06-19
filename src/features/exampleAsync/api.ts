import axios from 'axios'
export const getUserApi = () =>{
    return axios.get('http://dummy.restapiexample.com/api/v1/employees')
}