import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill"
import { ProductInformation } from "../molecules/productInformation"
import { Informations } from "../../informations"

export const ProductList = () => {
  return (
    <div className=''>
      <div className='ml-20 mt-20'>
        <div className='grid grid-cols-3 gap-4 mb-5'>
          {Informations.map((e, index) => {
            const modalName = e.name + index
            return (
              <div key={e.name}>
                <label htmlFor={modalName}>
                  <div className='rounded-none card w-80 bg-base-100 shadow-xl'>
                    <figure>
                      <img src={e.img} />
                    </figure>
                    <div className='card-body'>
                      <div className='flex gap-20'>
                        <h2 className='card-title'>
                          {e.name}
                          <div className='badge badge-secondary'>NEW</div>
                        </h2>
                        <div className='h-9 w-9 rounded-2xl flex items-center justify-center'>
                          <AiOutlineHeart className='h-7 w-7' />
                        </div>
                      </div>
                      <p>{e.detail}</p>
                      <div className='card-actions justify-end'>
                        {e.tags.map((tag, idx) => (
                          <div key={idx} className='badge badge-outline'>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </label>
                <input type='checkbox' id={modalName} className='modal-toggle' />
                <div className='modal'>
                  <ProductInformation
                    productName={e.name}
                    productPrice={e.price}
                    productSizes={e.sizes}
                    productTags={e.tags}
                    modalName={modalName}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
