'use client'
import { Button } from '@mantine/core'
import React from 'react'
import config from '~/constant/config'

export default function HomePage() {
  return (
    <div className='grid min-h-dvh place-content-center p-4'>
      <div className='mx-auto max-w-3xl space-y-3 text-center'>
        <h1 className='text-4xl font-medium'>Clean Starter</h1>
        <p className='text-pretty'>{config.appDescription}</p>
        <Button size='xs'>Execute Function</Button>
      </div>
    </div>
  )
}
