import type { Meta, StoryObj } from '@storybook/react'
import Popup, { type PopupProps } from '@/shared/popup/ui/Popup'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { CardBody } from '@/features/cards/ui/CardBody'

const Render = (props: PopupProps) => {
  const { children, title, open, subTitle } = props

  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    setOpen(open)
  }, [open])

  const onOpenChange = (flag: boolean): void => {
    setOpen(flag)
  }

  return (
    <>
      <div className={isOpen ? '' : 'cursor-pointer'}>
        <Popup title={title} open={isOpen} onOpenChange={onOpenChange} subTitle={subTitle}>
          {children}
        </Popup>
      </div>
    </>
  )
}

// More on how to set up stories at:
const meta = {
  title: 'Example/Popup',
  component: Popup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],

  // Use  to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  /* args: { onClick:  fn() },*/
} satisfies Meta<typeof Popup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'write',
    subTitle: 'valera',
    children: (
      /*<CardBody image={'https://images.drive.ru/i/0/4efb822709b602c33f000aa5.jpg'} title={'test'} body={'body'} />*/
      <h1>Test Component</h1>
    ),
    open: false,
  },
  render: Render,
}
export const Open: Story = {
  args: {
    title: 'write',
    subTitle: 'valera',
    children: (
      <CardBody image={'https://images.drive.ru/i/0/4efb822709b602c33f000aa5.jpg'} title={'test'} body={'body'} />
    ),
    open: true,
  },
  render: Render,
}
export const Close: Story = {
  args: {
    title: 'write',
    subTitle: 'valera',
    children: (
      <CardBody image={'https://images.drive.ru/i/0/4efb822709b602c33f000aa5.jpg'} title={'test'} body={'body'} />
    ),
    open: false,
  },
  render: Render,
}
