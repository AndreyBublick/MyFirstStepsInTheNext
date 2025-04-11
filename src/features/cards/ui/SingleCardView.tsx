import React, { useState } from 'react'

import Popup from '@/shared/popup/ui/Popup'
import { CardBody } from '@/features/cards/ui/CardBody'

type Props = {
  image: string
  title: string
  body: string
}
export const SingleCardView = (props: Props) => {
  const [isOpen, setOpen] = useState(false)
  const onOpenChange = (flag: boolean): void => {
    setOpen(flag)
  }
  return (
    <>
      <Popup title={'dsadasd'} open={isOpen} onOpenChange={onOpenChange}>
        <CardBody {...props} />
      </Popup>
    </>
  )
}
