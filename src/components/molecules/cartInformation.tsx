import { useCart } from "../../hooks/useCart"

export const CartInformation = () => {
  const ItemInfo = useCart()
  const FavItem = useCart()
  const { deleteToCart } = useCart()
  const { deleteToFav } = useCart()

  return (
    <div className='mt-20 flex justify-around'>
      <div>
        <div className='mb-20'>
          <p className='text-3xl'>カート</p>
          <div className='grid grid-cols-3 gap-4 mb-5'>
            {ItemInfo.products
              .filter((product) => product.status === "exist")
              .map((e, index) => (
                <div className='card w-80 bg-base-100 shadow-xl m-3 rounded-none' key={index}>
                  <figure>
                    <img src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
                  </figure>
                  <div className='card-body'>
                    <div className='flex gap-5'>
                      <h2 className='card-title text-2xl'>{e.name}</h2>
                      <div className='card-actions justify-end mt-1'>
                        {e.tags.map((e, idx) => (
                          <div className='badge badge-outline'>{e}</div>
                        ))}
                      </div>
                    </div>
                    <div className='flex'>
                      <p>￥{e.price}</p>
                      <p>サイズ : {e.size}</p>
                    </div>
                    <div className='flex justify-end mt-7'>
                      <button
                        className='btn btn-outline'
                        onClick={() => {
                          deleteToCart(e)
                        }}
                      >
                        カートから削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='mb-20'>
          <p className='text-3xl'>お気に入り</p>
          <div className='grid grid-cols-3 gap-4 mb-5'>
            {FavItem.favs
              .filter((fav) => fav.status === "exist")
              .map((e, index) => (
                <div className='card w-80 bg-base-100 shadow-xl m-3 rounded-none' key={index}>
                  <figure>
                    <img src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
                  </figure>
                  <div className='card-body'>
                    <div className='flex gap-5'>
                      <h2 className='card-title text-2xl'>{e.name}</h2>
                      <div className='card-actions justify-end mt-1'>
                        <div className='badge badge-outline'>Fashion</div>
                        <div className='badge badge-outline'>Products</div>
                      </div>
                    </div>
                    <div className='flex'>
                      <p>￥{e.price}</p>
                      <p>サイズ : {e.size}</p>
                    </div>
                    <div className='flex justify-end mt-7'>
                      <button
                        className='btn btn-outline'
                        onClick={() => {
                          deleteToFav(e)
                        }}
                      >
                        お気に入りから削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <p className='text-2xl mb-5'>ご注文金額</p>
        <div className='flex gap-10 text-lg mb-3'>
          <p>小計</p>
          <p>￥0</p>
        </div>
        <div className='flex gap-10 text-lg'>
          <p>配送料</p>
          <p>￥0</p>
        </div>
        <div className='divider' />
        <div className='flex gap-10 text-lg'>
          <p>合計(税込)</p>
          <p>￥0</p>
        </div>
        <div className='mt-10 mb-10'>
          <button className='btn btn-outline btn-success'>ご購入の手続き</button>
        </div>
      </div>
    </div>
  )
}
