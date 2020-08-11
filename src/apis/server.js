import axios from 'axios';

export default axios.create({
    baseURL: "https://fenxserver.herokuapp.com"
})