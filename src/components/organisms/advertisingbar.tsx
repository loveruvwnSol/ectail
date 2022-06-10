export const AdvertisingBar = () => {
  return (
    <div className='carousel w-full bg-base-200 text-center p-7'>
      <div id='slide1' className='carousel-item relative w-full'>
        {/* <img src='https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2' className='w-full' /> */}
        <p className='m-auto'>最新のプロダクト、特別なサービス、限定コンテンツが集結。</p>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2'>❯</a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        {/* <img src='https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB' className='w-full' /> */}
        <p className='m-auto'>最新のプロダクト、特別なサービス、限定コンテンツが集結。</p>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'></div>
        <a href='#slide1'>❮</a>
      </div>
    </div>
  )
}
