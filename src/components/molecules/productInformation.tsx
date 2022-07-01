import React, { useState } from "react"
import { nanoid } from "nanoid"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { useCart } from "../../hooks/useCart"
import { Product } from "../../types"

export const ProductInformation = () => {
  const sizes = [24, 25, 26, 27, 28, 29, 30]
  const [size, setSize] = useState<number>()
  const { addToCart } = useCart()

  const product: Product = {
    id: nanoid(),
    name: "shoes",
    imageURL: "",
    price: 5000,
    size: size,
    status: "exist",
  }
  const { id, name, price, ...other } = product

  return (
    <div className='modal-box w-11/12 max-w-full'>
      <div className='flex gap-12'>
        <img className='p-14' src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
        <div className=''>
          <h3 className='font-bold text-3xl mb-2'>{name}</h3>
          <div className='card-actions'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
          <p className='py-4'>￥ {price}</p>
          <div className='divider w-20 m-0' />
          <p className='py-4'>サイズを選択</p>
          <div className='flex gap-2'>
            {sizes.map((e, index) => {
              const activeStyle = "btn btn-outline bg-slate-900 text-white"
              const inactiveStyle = "btn btn-outline bg-slate-50"
              return (
                <button
                  key={index}
                  className={size === e ? activeStyle : inactiveStyle}
                  onClick={() => {
                    setSize(e)
                    console.log("size: " + e)
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
          <div className='flex gap-5'>
            <label
              className='btn btn-primary'
              htmlFor='my-modal-5'
              onClick={() => {
                addToCart(product)
                console.log(product)
              }}
            >
              カートに入れる
            </label>
            <button className='btn btn-outline'>
              お気に入りに追加 <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
      <div className='modal-action'>
        <label htmlFor='my-modal-5' className='btn'>
          閉じる
        </label>
      </div>
    </div>
  )
}
