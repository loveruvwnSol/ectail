import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
export const ProductCard = () => {
  return (
    <div className='rounded-none card w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <div className='flex gap-20'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <div className='h-9 w-9 border-2 border-slate-800 rounded-2xl flex items-center justify-center'>
            <AiOutlineHeart className='h-7 w-7' />
          </div>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </div>
  )
}
