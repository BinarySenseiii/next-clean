'use client'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'

export default function HomePage() {
  return (
    <div className="p-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.warning(
            'Attempted to access a server-side environment variable on the client',
            {
              duration: Infinity,
            },
          )
        }>
        Give me toast
      </Button>
    </div>
  )
}
