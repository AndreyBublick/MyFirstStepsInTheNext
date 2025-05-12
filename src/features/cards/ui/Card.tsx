import React from 'react'
import Link from 'next/link'
import { CardBody, type CardBodyProps } from '@/features/cards/ui/CardBody'

type Props = {
  id: number
} & CardBodyProps

export const Card = (props: Props) => {
  const { id, ...rest } = props

  return (
    <Link href={`/characters/${id}`} className='group'>
      <CardBody {...rest} />
    </Link>
  )
}
