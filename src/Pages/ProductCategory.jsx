import React, { useContext } from 'react'
import {AppContext} from "../Context/AppContext"
import { categories } from '../assets/assets';
import { useParams } from 'react-router-dom';
import ProductCard from "../Components/ProductCard"
// import { useParams } from 'react-router-dom';

const ProductCategory = () => {
  const {products,navigate} = useContext(AppContext);
  const {category} = useParams();
  const normalizedCategory = category.toLowerCase();

  const searchCategory = categories.find(
  (item) => item.path.toLowerCase() === normalizedCategory
);
  const filterProducts = products.filter(
  (product) =>
    typeof product.category === "string" &&
    product.category.toLowerCase() === normalizedCategory
);
  return (
    <div className='mt-16'>
      {
        searchCategory && (
          <div className='flex flex-col items-end w-max'>
             <h1 className='text-2xl md:text-3xl font-medium'>{searchCategory.text.toUpperCase()}</h1>
          </div>
        )
      }
      {
        filterProducts.length > 0 ?(
          <div>
            <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center'>
               {
                filterProducts.map((product,index)=>(
                  <ProductCard key={index} product={product}/>
                ))
               }
            </div>
          </div>
        ):
        <div>
          <h1 className='text-3xl md:text-4xl font-medium'>No Products Found</h1>
        </div>
      }
    </div>
  )
}

export default ProductCategory
