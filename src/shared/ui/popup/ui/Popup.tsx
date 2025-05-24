import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import s from './style.module.scss'

export type PopupProps = {
  title?: string
  children?: React.ReactNode
  open: boolean
  onOpenChange?: (flag: boolean) => void
  subTitle?: string
} & ComponentPropsWithoutRef<'div'>

const DialogDemo = ({ title, subTitle, children, open, ...rest }: PopupProps) => (
  <Dialog.Root open={open} {...rest}>
    <Dialog.Trigger asChild>
      <div>{children}</div>
    </Dialog.Trigger>
    {/*  </div>
      </div>
    </div>*/}
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={s.Content}>
        <Dialog.Title className={s.Title}>{title}</Dialog.Title>
        <Dialog.Description className={s.Description}>{subTitle}</Dialog.Description>
        <div className='text-center'>{children}</div>

        <Dialog.Close asChild>
          <button className={s.IconButton} aria-label='Close'>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogDemo
