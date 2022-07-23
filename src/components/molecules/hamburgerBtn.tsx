import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

type NavBarGenre = {
  navBarGenre: string[]
}

export const HamburgerBtn: React.FC<NavBarGenre> = ({ navBarGenre }) => {
  return (
    <div className='top-16 w-full max-w-sm xl:hidden'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:none focus-visible:ring-opacity-75`}
            >
              <span>
                <label tabIndex={0} className='btn btn-ghost xl:hidden'>
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
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10 ml-32'>
                  <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-1'>
                    {navBarGenre.map((item) => (
                      <a
                        key={item}
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'></div>
                        <div className=''>
                          <p className='text-sm font-medium text-gray-900'>{item}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
