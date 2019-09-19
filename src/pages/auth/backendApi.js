import axios from 'axios';

export default axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://whispering-everglades-26046.herokuapp.com',
    headers: {
        "Content-type": "application/x-www-form-urlencoded"
    }
})