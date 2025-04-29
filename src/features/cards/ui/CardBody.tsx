import React from 'react'
import Image from 'next/image'

export type CardBodyProps = {
  image: string
  title: string
  body: string
}

export const CardBody = (props: CardBodyProps) => {
  const { image, title, body } = props
  return (
    <div>
      <Image
        src={image}
        alt='character'
        className='aspect-square  rounded-lg object-cover group-hover:opacity-75 xl:aspect-7/8 text-center mx-auto my-0'
        width={310}
        height={310}
      />
      <h3 className='mt-4 text-sm' style={{ color: 'var(--color-light-700)' }}>
        {title}
      </h3>
      <p className='mt-1 text-lg font-medium' style={{ color: 'var(--color-light-300)' }}>
        {body}
      </p>
    </div>
  )
}
