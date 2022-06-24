import React from "react"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsBagIcon } from "../../atoms/BsBag"
import { NavBarItems } from "./navbarItems"
import Link from "next/link"

export const NavBar = () => {
  return (
    <div className='navbar bg-base-100 font-sans'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
        </div>
        <Link href='/'>
          <svg className='pre-logo-svg h-16 w-16 fill-slate-900 ml-10' viewBox='0 0 69 32'>
            <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
          </svg>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li tabIndex={0}>
            <a className='font-bold'>NEW RELEASES</a>
            <NavBarItems />
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>MEN</a>
            <NavBarItems />
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>WOMEN</a>
            <NavBarItems />
          </li>
          <li tabIndex={0} className='hover:decoration-current'>
            <a className='font-bold'>KIDS</a>
            <NavBarItems />
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>CUSTOMIZE</a>
            <NavBarItems />
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>SALE</a>
            <NavBarItems />
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>COLLECTIONS</a>
            <NavBarItems />
          </li>
        </ul>
      </div>
      <div className='navbar-end gap-5'>
        <div className='form-control'>
          <div className='input-group'>
            <button className='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
            <input type='text' placeholder='検索' className='input input-bordered' />
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='h-7 w-7'>
            <AiOutlineHeart className='w-full h-full' />
          </div>
          <div className='h-7 w-7'>
            <Link href='/kart'>
              <BsBagIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
