export const SideNav = () => {
  return (
    <div className='ml-6'>
      <div className=' mt-5 mb-5 text-2xl'>
        <p>新着商品(x)</p>
      </div>
      <ul className='menu bg-base-100 w-56 rounded-none h-screen overflow-auto'>
        <div>
          <li className='hover-bordered'>
            <a>シューズ</a>
          </li>
          <li className='hover-bordered'>
            <a>スポーツブラ</a>
          </li>
          <li className='hover-bordered'>
            <a>トップス & Tシャツ</a>
          </li>
          <li className='hover-bordered'>
            <a>パーカー & トレーナー</a>
          </li>
          <li className='hover-bordered'>
            <a>アウター & ベスト</a>
          </li>
          <li className='hover-bordered'>
            <a>パンツ & タイツ</a>
          </li>
          <li className='hover-bordered'>
            <a>ハーフパンツ/ショートパンツ</a>
          </li>
          <li className='hover-bordered'>
            <a>インナー(アンダーシャツ/パンツ)</a>
          </li>
          <li className='hover-bordered'>
            <a>スカート & ドレス</a>
          </li>
          <li className='hover-bordered'>
            <a>ソックス</a>
          </li>
          <li className='hover-bordered'>
            <a>アクセサリー</a>
          </li>
        </div>
        <div className='mt-7'>
          <div className='divider' />
          <li className='menu-title'>
            <span>性別</span>
          </li>
          <li>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>メンズ</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>レディース</p>
            </div>
          </li>
        </div>
        <div className='mt-7'>
          <div className='divider' />
          <li className='menu-title'>
            <span>キッズ</span>
          </li>
          <li>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>ボーイズ</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>ガールズ</p>
            </div>
          </li>
        </div>
        <div className='mt-7'>
          <div className='divider' />
          <li className='menu-title'>
            <span>ブランド</span>
          </li>
          <li>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>Nike Sportswear</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>ジョーダン</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>Nike By You</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>NikeLab</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>ACG</p>
            </div>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>Nike Pro</p>
            </div>
          </li>
        </div>
        <div className='mt-7'>
          <div className='divider' />
          <li className='menu-title'>
            <span>用途で選ぶ</span>
          </li>
          <li>
            <div>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <p>雨の日</p>
            </div>
          </li>
        </div>
      </ul>
    </div>
  )
}
