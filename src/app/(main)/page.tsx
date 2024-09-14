'use client'
import { Button } from '~/core/components/design-system/button'
import { useBearActions, useBearState } from '~/core/store/bear-store'

export default function HomePage() {
  const { bears } = useBearState()
  const { increasePopulation } = useBearActions()
  return (
    <div className="grid min-h-dvh place-content-center p-4">
      <strong>{bears}</strong>
      <Button onClick={() => increasePopulation(20)}>Increase Bears</Button>
    </div>
  )
}
