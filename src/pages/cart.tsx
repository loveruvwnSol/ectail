import type { NextPage } from "next"
import Head from "next/head"
// import { useStore } from "../components/molecules/productInformation"
import { CartTemplate } from "../components/templates/cartTemplate"

const Cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ectail</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <CartTemplate />
      </div>
    </div>
  )
}

export default Cart
