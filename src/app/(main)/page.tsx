'use client'
import { useCopyToClipboard } from 'react-use'
import { CheckCheck, Copy } from 'lucide-react'

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git'

export default function HomePage() {
	const [{ value }, copyToClipboard] = useCopyToClipboard()
	const hasCopiedText = Boolean(value)

	return (
		<div className="flex min-h-dvh items-center justify-center bg-black">
			<div
				className="flex items-center justify-center gap-2 text-white"
				onClick={() => copyToClipboard(CLONE_TEXT)}
			>
				<span>{CLONE_TEXT}</span>
				<i className="cursor-pointer">
					{hasCopiedText ? <CheckCheck /> : <Copy />}
				</i>
			</div>
		</div>
	)
}
