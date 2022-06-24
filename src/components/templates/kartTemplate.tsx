import { HeaderNav } from "../molecules/headernav"
import { NavBar } from "../organisms/navbar"
import { Footer } from "../molecules/footer"
import { KartInformation } from "../molecules/kartInformation"

export const KartTemplate = () => {
  return (
    <div>
      <HeaderNav />
      <NavBar />
      <KartInformation />
      <Footer />
    </div>
  )
}
