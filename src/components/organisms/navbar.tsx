import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsBag } from "@react-icons/all-files/bs/BsBag"

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
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li tabIndex={0}>
            <a className='font-bold'>NEW RELEASES</a>
            <ul className='menu bg-base-100 w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>MEN</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>WOMEN</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0} className='hover:decoration-current'>
            <a className='font-bold'>KIDS</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>CUSTOMIZE</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>SALE</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className='font-bold'>COLLECTIONS</a>
            <ul className='menu bg-base-100  w-96 p-2 rounded-box border-2 z-10'>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li className='menu-title'>
                <span>Category</span>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
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
            <BsBag className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
