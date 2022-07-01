import { ProductCard } from "../molecules/productcard"

export const ProductList = () => {
  const information = [
    { name: "shoes", detail: "If a dog chews shoes whose shoes does he choose?" },
    { name: "T-shirt", detail: "If a dog chews shoes whose shoes does he choose?" },
  ]
  return (
    <div className=''>
      <div className='ml-20 mt-20'>
        <div className='grid grid-cols-3 gap-4 mb-5'>
          {information.map((e, index) => (
            <ProductCard key={index} information={information} />
          ))}
        </div>
      </div>
    </div>
  )
}
