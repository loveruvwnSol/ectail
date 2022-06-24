import type { NextPage } from "next"
import Head from "next/head"
import { useStore } from "../components/molecules/productInformation"
import { KartTemplate } from "../components/templates/kartTemplate"

const Kart: NextPage = () => {
  const { id, name, price, size, increment } = useStore()
  return (
    <div>
      <Head>
        <title>ectail</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <p suppressHydrationWarning>{id}</p>
        {name}
        {size}
        {price}
        <button onClick={increment}>+100</button>
        <KartTemplate />
      </div>
    </div>
  )
}

export default Kart
