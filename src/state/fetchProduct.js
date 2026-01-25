import axios from "axios";

const API_URL = 'http://localhost:5454/products';

export const fetchProduct = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("response", response.data);

    } catch (error) {
        console.error(error);
    }
};