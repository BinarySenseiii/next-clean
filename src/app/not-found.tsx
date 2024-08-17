import { Frown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { getBackgroundPattern } from '~/components/ui/bg-patterns'
import { Button } from '~/components/ui/button'

const NotFoundPage = () => {
  return (
    <div className='relative grid min-h-dvh place-content-center'>
      {getBackgroundPattern('bg-light-grid-1')}

      <div className='container'>
        <div className='flex flex-col items-center justify-center text-center'>
          <Frown className='size-16 text-gray-600' />
          <h1 className='mt-4 text-balance text-3xl font-black italic'>
            This page doesn&apos;t exist
          </h1>
          <p className='mx-auto my-4 mb-4 max-w-xl text-center text-base'>
            Oops! It seems like you&apos;ve stumbled upon a page that
            doesn&apos;t exist Don&apos;t worry, even the best of us get lost
            sometimes
          </p>

          <Button asChild>
            <Link href='/'>
              <span className='text-xs md:text-base'>Back to home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
