import React, { useCallback, useState } from "react"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill"
import { ProductInformation } from "../molecules/productInformation"
import { Informations } from "../../informations"
import { useCart } from "../../hooks/useCart"

export const ProductList = () => {
  return (
    <div className='z-5'>
      <div className='m-auto mt-20 sm:ml-20'>
        <div className='grid grid-cols-1 gap-4 mb-5 md:grid-cols-2 justify-center lg:grid-cols-2 xl:grid-cols-3'>
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
