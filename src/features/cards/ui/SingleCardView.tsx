import React, { useState } from 'react'

import Popup from '@/shared/ui/popup/ui/Popup'
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
      <div className='flex justify-center min-h-screen'>
        <div className='flex justify-center items-center min-h-screen flex-col h-[calc(100vh-100px)]'>
          <div className={isOpen ? '' : 'cursor-pointer'}>
            <Popup title={'dsadasd'} open={isOpen} onOpenChange={onOpenChange}>
              <CardBody {...props} />
            </Popup>
          </div>
        </div>
      </div>
    </>
  )
}
