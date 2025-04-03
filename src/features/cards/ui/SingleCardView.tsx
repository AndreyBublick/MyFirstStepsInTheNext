import React from 'react'

import Image from 'next/image'

type Props = {
  image: string
  title: string
  body: string
}
export const SingleCardView = (props: Props) => {
  const { image, body, title } = props

  return (
    <div className='flex justify-center items-center min-h-screen flex-col'>
      <Image
        src={image}
        alt='character'
        className='aspect-square  rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
        width={310}
        height={310}
      />
      <h3 className='mt-4 text-sm text-gray-700'>{title}</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>{body}</p>
    </div>
  )
}
