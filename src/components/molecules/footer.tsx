export const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <div>
          <span className='footer-title'>NIKEギフトカード</span>
          <a className='link link-hover'>10%学生・教職員割引</a>
          <a className='link link-hover'>障害者割引</a>
          <a className='link link-hover'>最寄りの店舗</a>
          <a className='link link-hover'>メンバー登録</a>
          <a className='link link-hover'>コンビニ受け取りサービス</a>
          <a className='link link-hover'>最新情報を受け取る</a>
          <a className='link link-hover'>フィードバックをお寄せください</a>
        </div>
        <div>
          <span className='footer-title'>ヘルプ</span>
          <a className='link link-hover'>注文履歴</a>
          <a className='link link-hover'>配送と発送</a>
          <a className='link link-hover'>返品</a>
          <a className='link link-hover'>交換</a>
          <a className='link link-hover'>支払いオプション</a>
          <a className='link link-hover'>お問い合わせ</a>
        </div>
        <div>
          <span className='footer-title'>ナイキについて</span>
          <a className='link link-hover'>ニュース</a>
          <a className='link link-hover'>採用情報</a>
          <a className='link link-hover'>投資家情報</a>
          <a className='link link-hover'>サステナビリティ</a>
          <a className='link link-hover'>NIKEギフトカードについて</a>
        </div>
      </footer>
      <footer className='footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300'>
        <div className='items-center grid-flow-col'>
          <svg className='pre-logo-svg h-16 w-16 fill-slate-900' viewBox='0 0 69 32'>
            <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />© 2022 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <div className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
                fill='#fff'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
