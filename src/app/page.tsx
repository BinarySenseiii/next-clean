import Image from 'next/image'
import React from 'react'
import { EpicStackLogo } from '~/assets/logos/epic-stack'
import { logos } from '~/assets/logos/logos'
import { cn } from '~/lib/utils'

const columnClasses: Record<(typeof logos)[number]['column'], string> = {
  1: 'xl:col-start-1',
  2: 'xl:col-start-2',
  3: 'xl:col-start-3',
  4: 'xl:col-start-4',
  5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
  1: 'xl:row-start-1',
  2: 'xl:row-start-2',
  3: 'xl:row-start-3',
  4: 'xl:row-start-4',
  5: 'xl:row-start-5',
  6: 'xl:row-start-6',
}

export default async function HomePage() {
  return (
    <div className='grid min-h-dvh place-content-center px-4 py-16'>
      <div className='grid max-w-6xl place-content-center items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-x-24 xl:gap-y-4'>
        <div className='mx-auto grid items-center text-center xl:order-2 xl:col-start-2 xl:row-span-2 xl:row-start-3 xl:grid-cols-[auto_1fr] xl:grid-rows-subgrid xl:gap-4 xl:text-left'>
          <EpicStackLogo
            className={cn(
              'size-20 animate-slide-top justify-self-center xl:animate-slide-left xl:justify-self-start xl:[animation-delay:0.5s]'
            )}
          />
          <h1
            className={cn(
              'mt-6 text-4xl font-medium sm:text-4.5xl md:mt-8 md:text-5xl xl:mt-0',
              'animate-slide-top [animation-delay:0.3s]',
              'xl:animate-slide-left xl:[animation-delay:0.8s]'
            )}>
            The <span className='text-highlight'>Epic</span> Stack
          </h1>
          <p
            className={cn(
              'mt-4 max-w-md text-base text-slate-600 sm:text-lg md:mt-6 md:text-xl xl:col-span-2 xl:mt-0 xl:max-w-full',
              'animate-slide-top [animation-delay:0.8s]',
              'xl:animate-slide-left xl:[animation-delay:1.3s]'
            )}>
            Check the{' '}
            <a
              href='https://github.com/BinarySenseiii/next-clean'
              className='text-black underline hover:no-underline focus:outline-0 focus:ring-2 focus:ring-highlight'
              target='_blank'>
              Getting Started
            </a>{' '}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className='mx-auto flex max-w-2xl flex-wrap justify-center gap-2 sm:gap-4 lg:max-w-3xl xl:row-span-6 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-subgrid'>
          {logos.map((logo, index) => (
            <li
              style={{ '--loop-index': index } as React.CSSProperties}
              key={logo.href}
              className={cn(
                columnClasses[logo.column],
                rowClasses[logo.row],
                'animate-fade-in motion-safe:animate-roll-reveal',
                'motion-safe:[animation-delay:calc(0.07s*var(--loop-index))]'
              )}>
              <a
                target='_blank'
                href={logo.href}
                className='grid size-20 place-content-center rounded-2xl bg-highlight/[7%] p-4 transition hover:-rotate-6 hover:bg-highlight/10 focus:outline-0 focus:ring-2 focus:ring-highlight focus:ring-offset-2 sm:size-24'>
                <Image src={logo.src} alt={logo.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
