'use client'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'

export default function HomePage() {
  return (
    <div className='container space-y-2 p-4'>
      <Button
        variant='destructive'
        onClick={() =>
          toast.error('Attempted to access a server-side environment variable on the client', {
            duration: Infinity,
          })
        }>
        Give me toast
      </Button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis similique nostrum neque
        voluptate aperiam, quibusdam, minus dolores nisi cupiditate numquam sint qui. Possimus
        debitis odit neque voluptatem! Nobis, veniam!
      </p>
    </div>
  )
}
