import { Info } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="grid min-h-dvh place-content-center p-4">
      <span
        className="border-paleSkyBlue relative z-[9999999999] rounded-full border p-1 font-medium hover:cursor-pointer hover:bg-neutral-100 hover:text-neutral-100 data-[tooltip]:before:invisible data-[tooltip]:before:absolute data-[tooltip]:before:right-full data-[tooltip]:before:top-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:mr-2 data-[tooltip]:before:h-0 data-[tooltip]:before:-translate-y-1/2 data-[tooltip]:before:bg-white data-[tooltip]:before:opacity-0 data-[tooltip]:before:drop-shadow data-[tooltip]:before:transition-all data-[tooltip]:before:[clip-path:polygon(0_50%,100%_0,100%_100%)] data-[tooltip]:after:invisible data-[tooltip]:after:absolute data-[tooltip]:after:right-full data-[tooltip]:after:top-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:mr-2 data-[tooltip]:after:min-h-fit data-[tooltip]:after:w-max data-[tooltip]:after:max-w-[300px] data-[tooltip]:after:origin-right data-[tooltip]:after:-translate-y-1/4 data-[tooltip]:after:scale-50 data-[tooltip]:after:whitespace-normal data-[tooltip]:after:rounded-md data-[tooltip]:after:bg-white data-[tooltip]:after:px-2.5 data-[tooltip]:after:py-1 data-[tooltip]:after:text-left data-[tooltip]:after:text-xs data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:opacity-0 data-[tooltip]:after:drop-shadow data-[tooltip]:after:transition-all data-[tooltip]:after:content-[attr(data-tooltip)] hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:max-w-[100px] hover:data-[tooltip]:after:scale-100 hover:data-[tooltip]:after:opacity-100"
        data-tooltip="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
      >
        <Info />
      </span>
    </div>
  )
}
