'use client'

import { Button } from '~/core/components/design-system/button'
import { env } from '~/core/constant/env'
import { useCount, useCountActions } from '~/core/store/count-store'

export default function HomePage() {
	const count = useCount()
	const { incrementCount, decrementCount } = useCountActions()

	return (
		<div className="flex min-h-dvh items-center justify-center">
			<div className="w-full max-w-56 space-y-4 rounded-md p-2 shadow-md ring-2 ring-primary">
				<div className="grid h-44 w-full place-content-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
					<h3 className="text-7xl font-black text-white">{count}</h3>
				</div>
				{env.NEXT_PUBLIC_CLIENTVAR}
				<div className="flex items-center justify-center gap-2">
					<Button
						size="sm"
						disabled={count === 0}
						onClick={() => decrementCount()}
					>
						Decrement
					</Button>
					<Button size="sm" onClick={() => incrementCount()}>
						Increment
					</Button>
				</div>
			</div>
		</div>
	)
}
