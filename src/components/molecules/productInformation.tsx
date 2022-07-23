import React, { useState } from "react"
import { nanoid } from "nanoid"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsBagFill } from "@react-icons/all-files/bs/BsBagFill"
import { useCart } from "../../hooks/useCart"
import { Product } from "../../types"

type NamesProps = {
  productName: string
  productPrice: number
  productSizes: any[]
  productTags: string[]
  modalName: string
}

export const ProductInformation: React.FC<NamesProps> = ({
  productName,
  productPrice,
  productSizes,
  productTags,
  modalName,
}) => {
  const [size, setSize] = useState<number>()
  const { addToCart } = useCart()
  const { addToFav } = useCart()

  const product: Product = {
    id: nanoid(),
    name: productName,
    imageURL: "",
    price: productPrice,
    size: size,
    tags: productTags,
    status: "exist",
  }
  const { id, name, price, ...other } = product

  return (
    <div className='modal-box w-11/12 max-w-full'>
      <div className='lg:flex gap-12'>
        <img
          className='mb-5 lg:p-14 lg:flex lg:justify-center'
          src='https://api.lorem.space/image/shoes?w=400&h=225'
          alt='Shoes'
        />
        <div className=''>
          <h3 className='font-bold text-3xl mb-2'>{productName}</h3>
          <div className='card-actions'>
            {productTags.map((e, idx) => (
              <div key={idx} className='badge badge-outline'>
                {e}
              </div>
            ))}
          </div>
          <p className='py-4'>￥ {price}</p>
          <div className='divider w-20 m-0' />
          <p className='py-4'>サイズを選択</p>
          <div className='md:flex gap-2'>
            {productSizes.map((e, index) => {
              const activeStyle = "btn btn-outline bg-slate-900 text-white"
              const inactiveStyle = "btn btn-outline"
              return (
                <button
                  key={index}
                  className={size === e ? activeStyle : inactiveStyle}
                  onClick={() => {
                    setSize(e)
                  }}
                >
                  {e}
                </button>
              )
            })}
          </div>
          <p className='py-4'>
            堅実な性格とこの世のものとは思えない運動能力を兼ね備え、
            <br />
            バスケットボールに全力を注いでいるザイオンにぴったりのフットウェアが誕生しました。
            <br />
            軽量で安定感のある丈夫なデザインで、屋外コートで抜群の機能性を発揮するXDRアウトソールを使用。
            <br />
            一方で、Airクッショニングを搭載し、快適な履き心地と、誰もが好むキレのある反発性を実現しました。
          </p>
          <div className='lg:flex gap-5'>
            <label
              className='btn btn-primary mb-7'
              htmlFor={modalName}
              onClick={() => {
                addToCart(product)
                setSize(undefined)
              }}
            >
              カートに入れる
              <BsBagFill className='w-7' />
            </label>
            <button
              className='btn btn-outline'
              onClick={() => {
                addToFav(product)
              }}
            >
              お気に入りに追加 <AiOutlineHeart className='w-7' />
            </button>
          </div>
        </div>
      </div>
      <div className='modal-action'>
        <label
          htmlFor={modalName}
          className='btn'
          onClick={() => {
            setSize(undefined)
          }}
        >
          閉じる
        </label>
      </div>
    </div>
  )
}
