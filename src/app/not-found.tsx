/** @format */

import Link from 'next/link'

import { getBackgroundPattern } from '~/components'

const NotFoundPage = () => {
   return (
      <div className="relative grid min-h-dvh place-content-center">
         {getBackgroundPattern('bg-light-grid-gradient-1')}

         <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mt-4 text-balance text-7xl font-black sm:text-8xl">404</h1>
            <h2 className="mt-4 text-balance text-2xl font-black sm:text-3xl">Page not found</h2>
            <p className="mx-auto my-4 max-w-xl text-balance text-center text-sm sm:text-base">
               It looks like the page you&apos;re searching for doesn’t exist. The link might be broken or the page may
               have been moved
            </p>

            <Link href="/">
               <span className="text-xs md:text-base">Back to home</span>
            </Link>
         </div>
      </div>
   )
}

export default NotFoundPage
