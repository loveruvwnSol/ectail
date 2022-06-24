import React from "react"
import { BsBag } from "@react-icons/all-files/bs/BsBag"

export const BsBagIcon = React.forwardRef(({ onClick, href }: any, ref: any) => {
  return <BsBag onClick={onClick} href={href} className='w-full h-full' />
})
