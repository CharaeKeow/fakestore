import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products${id}`);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}