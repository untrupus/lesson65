import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://lesson65-248b6.firebaseio.com/'
});

export default axiosOrders;