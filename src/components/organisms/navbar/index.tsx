import React from "react"
import { NavBarItems } from "./navbarItems"
import { useCart } from "../../../hooks/useCart"
import { HamburgerBtn } from "../../molecules/hamburgerBtn"
import Link from "next/link"

export const NavBar = () => {
  const ItemInfo = useCart()
  const CartItems = ItemInfo.products.filter((item) => item.status === "exist")
  const navBarGenre = ["NEW RELEASES", "MEN", "WOMEN", "KIDS", "CUSTOMIZE", "SALE", "COLLECTIONS"]
  return (
    <div className='navbar bg-base-100 font-sans'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <HamburgerBtn navBarGenre={navBarGenre} />
        </div>
        <Link href='/'>
          <svg className='pre-logo-svg h-16 w-16 fill-slate-900 lg:ml-10' viewBox='0 0 69 32'>
            <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
          </svg>
        </Link>
      </div>
      <div className='navbar-center hidden xl:flex'>
        <ul className='menu menu-horizontal p-0'>
          {navBarGenre.map((e, index) => (
            <li tabIndex={0} key={index}>
              <a className='font-bold'>{e}</a>
              <NavBarItems />
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end gap-5'>
        <div className='form-control md:block hidden'>
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
        <div className='flex items-center gap-2'>
          <div className='flex-none w-full h-full'>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle'>
                <div className='indicator'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='badge badge-sm indicator-item'>{CartItems.length}</span>
                </div>
              </label>
              <div className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
                <div className='card-body'>
                  <span className='font-bold text-lg'>{CartItems.length} Items</span>
                  <div className='card-actions'>
                    <Link href='/cart'>
                      <div className='btn btn-primary btn-block'>カートに行く</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
