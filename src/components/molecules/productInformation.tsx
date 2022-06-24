import React from "react"
import create from "zustand"
import { nanoid } from "nanoid"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"

interface State {
  id: string
  name: string
  imageURL: string
  price: number | null
  size: number | null
  increment: () => void
}

export const useStore = create<State>((set) => ({
  id: nanoid(),
  name: "shoes",
  imageURL: "",
  price: 5000,
  size: 24,
  increment: () => set((state) => ({ price: state.price && state.price + 100 })),
}))

export const ProductInformation = () => {
  const { id, name, price, size, increment } = useStore()
  const sizes = [24, 25, 26, 27, 28, 29, 30]
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
            {sizes.map((e, index) => (
              <button
                key={index}
                className='btn btn-outline'
                onClick={() => {
                  console.log(e)
                }}
              >
                {e}
              </button>
            ))}
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
            <label htmlFor='my-modal-5' className='btn btn-primary'>
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
