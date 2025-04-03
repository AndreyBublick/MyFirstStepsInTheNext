import React from 'react'
import { useGetCharactersQuery } from '@/features/cards/lib/api'
import { Card } from '@/features/cards/ui/Card'

export const Cards = () => {
  const { data } = useGetCharactersQuery()
  const isRender = data && data.results.length

  return (
    /*<div>
      {isRender &&
        data.results.map(card => <Card key={card.id} image={card.image} title={card.name} body={card.species} />)}
    </div>*/
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Characters</h2>

        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {isRender &&
            data.results.map(card => (
              <Card key={card.id} id={card.id} image={card.image} title={card.name} body={card.species} />
            ))}
        </div>
      </div>
    </div>
  )
}
