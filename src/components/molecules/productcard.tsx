import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { info } from "console"
import { ProductInformation } from "./productInformation"

type InformationProps = {
  information: any
}

export const ProductCard: React.FC<InformationProps> = ({ information }) => {
  return (
    <div>
      <label htmlFor='my-modal-5'>
        <div className='rounded-none card w-80 bg-base-100 shadow-xl'>
          <figure>
            <img src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <div className='flex gap-20'>
              <h2 className='card-title'>
                {information[0].name}
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <div className='h-9 w-9 rounded-2xl flex items-center justify-center'>
                <AiOutlineHeart className='h-7 w-7' />
              </div>
            </div>
            <p>{information[0].detail}</p>
            <div className='card-actions justify-end'>
              <div className='badge badge-outline'>Fashion</div>
              <div className='badge badge-outline'>Products</div>
            </div>
          </div>
        </div>
      </label>
      <input type='checkbox' id='my-modal-5' className='modal-toggle' />
      <div className='modal'>
        <ProductInformation />
      </div>
    </div>
  )
}
