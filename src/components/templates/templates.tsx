import { HeaderNav } from "../molecules/headernav"
import { NavBar } from "../organisms/navbar"
import { AdvertisingBar } from "../organisms/advertisingbar"
import { SideNav } from "../organisms/sidenav"
import { ProductList } from "../organisms/productlist"
import { Footer } from "../molecules/footer"

export const Templates = () => {
  return (
    <div>
      <HeaderNav />
      <NavBar />
      <AdvertisingBar />
      <div className='flex'>
        <SideNav />
        <ProductList />
      </div>
      <Footer />
    </div>
  )
}
