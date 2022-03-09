import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}