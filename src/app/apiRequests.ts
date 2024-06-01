import { Dispatch, SetStateAction } from "react";
import { Product } from "./models/Product";
import axios from "axios";

export const fetchProducts = async (setProducts: Dispatch<SetStateAction<Product[]>>, setLoading: Dispatch<SetStateAction<boolean>>) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    if (response.data.length) {
      const productDataCopy = [...response.data];
      productDataCopy.map((item: Product) => {
        if (item.title.length > 50) {
          item.title = item.title.slice(0, 47) + '...';
        }
      });
      setProducts(productDataCopy);
      setLoading(false);
    }
  } catch (error) {
    console.error('Error fetching product data: ', error);
    setLoading(false);
  }
};