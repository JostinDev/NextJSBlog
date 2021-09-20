import React, {useEffect, useState} from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from "next/router"
import { observer } from 'mobx-react-lite'
import { useStores } from '../hooks/use-stores'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = observer(function () {

  const { navStore } = useStores()
  const router = useRouter();

  useEffect(() => {
    navStore.routerPath(router.pathname)
  },[]);

  return (
    <Disclosure as='nav' className='border-b bg-white border-gray-300'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open
                    ? (<XIcon className='block h-6 w-6' aria-hidden='true' />)
                    : (<MenuIcon className='block h-6 w-6' aria-hidden='true' />)}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <p className='block h-8 w-auto text-3xl font-semibold text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>JN</p>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navStore.getNav().map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        passHref
                      >
                        <span
                            onClick={() => navStore.routerPath(item.href)}
                            className={classNames(
                            item.current ?
                              'py-1 px-1 text-white rounded cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'
                              :
                              'py-1 text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
                            )}
                            aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navStore.getNav().map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                >
                  <p
                    onClick={() => navStore.routerPath(item.href)}
                      className={classNames(
                        item.current ?
                          'py-1 px-1 text-white rounded cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'
                          :
                          'py-1 text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                  >
                          {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
})

export default Navbar
