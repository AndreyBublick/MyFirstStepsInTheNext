import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: number
  image: string
  title: string
  body: string
}
export const Card = (props: Props) => {
  const { image, body, title, id } = props

  return (
    <Link href={`/characters/${id}`} className='group'>
      <Image
        src={image}
        alt='character'
        className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
        width={310}
        height={310}
      />
      <h3 className='mt-4 text-sm text-gray-700'>{title}</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>{body}</p>
    </Link>
  )
}
