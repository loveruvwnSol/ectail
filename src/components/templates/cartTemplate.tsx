import { HeaderNav } from "../molecules/headernav"
import { NavBar } from "../organisms/navbar"
import { Footer } from "../molecules/footer"
import { CartInformation } from "../molecules/cartInformation"

export const CartTemplate = () => {
  return (
    <div>
      <HeaderNav />
      <NavBar />
      <CartInformation />
      <Footer />
    </div>
  )
}
