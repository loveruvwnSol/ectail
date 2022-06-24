import { ProductCard } from "../molecules/productcard"

export const ProductList = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const information = [
    { name: "shoes", detail: "If a dog chews shoes whose shoes does he choose?" },
  ]
  console.log(information[0].name)
  return (
    <div className=''>
      <div className='ml-20 mt-20'>
        <div className='grid grid-cols-3 gap-4 mb-5'>
          {arr.map((e,index) => (
            <ProductCard key={index} information={information} />
          ))}
        </div>
      </div>
    </div>
  )
}
