import React from 'react'

import { Card } from '@/features/cards/ui/Card'
import type { CharacterType } from '@/app/types'

type Props = {
  items: CharacterType[]
}

export const Cards = (props: Props) => {
  const { items } = props

  const isRender = items && items.length > 0

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Characters</h2>

        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {isRender &&
            items.map(card => (
              <Card key={card.id} id={card.id} image={card.image} title={card.name} body={card.species} />
            ))}
        </div>
      </div>
    </div>
  )
}
