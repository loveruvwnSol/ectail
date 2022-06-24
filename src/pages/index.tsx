import type { NextPage } from "next"
import Head from "next/head"
import { HomeTemplate } from "../components/templates/homeTemplate"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ectail</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <HomeTemplate />
      </div>
    </div>
  )
}

export default Home
