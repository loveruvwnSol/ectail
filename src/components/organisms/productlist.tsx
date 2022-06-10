import { ProductCard } from "../molecules/productcard"

export const ProductList = () => {
  return (
    <div className=''>
      <div className='ml-20 mt-20'>
        <div className='flex gap-4 mb-5'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className='flex gap-4 mb-5'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
