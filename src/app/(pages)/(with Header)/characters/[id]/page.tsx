'use client'
import React from 'react'
import { useGetCharacterQuery } from '@/features/cards/lib/api'
import { SingleCardView } from '@/features/cards/ui/SingleCardView'
/*11aaв3фВ33d3sd23*/
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
