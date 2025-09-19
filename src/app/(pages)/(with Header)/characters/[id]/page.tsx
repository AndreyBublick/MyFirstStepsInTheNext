'use client'
import React from 'react'
import { useGetCharacterQuery } from '@/features/cards/lib/api'
import { SingleCardView } from '@/features/cards/ui/SingleCardView'
/*1131a1aвdфф3dd3sd23*/
type Props = {
  params: Promise<{
    id: string
  }>
}
const Page = (props: Props) => {
  const { id } = React.use(props.params)
  const { data } = useGetCharacterQuery(id)
  if (!data) {
    return null
  }

  const { image, name, species } = data
  return <SingleCardView body={species} image={image} title={name} />
}
export default Page
