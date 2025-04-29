import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Picker, type PropsPicker } from '@/shared/picker/Picker/ui/Picker'
import { fn } from '@storybook/test'

const DEFAULT_OPTIONS = [
  { id: 1, value: 'value_1' },
  { id: 2, value: 'value_2' },
  { id: 3, value: 'value_3' },
]

const RenderTextValue = (props: PropsPicker) => {
  const { options, ...rest } = props

  const [optionsValue, setOptionsValue] = useState(options)

  useEffect(() => {
    if (Array.isArray(options)) {
      setOptionsValue(options)
    }
  }, [options])

  /* const onOpenChange = (flag: boolean): void => {
    setOpen(flag)
  }*/

  return (
    <>
      <Picker options={optionsValue} {...rest} />
    </>
  )
}

// More on how to set up stories at:
const meta = {
  title: 'Example/Picker',
  component: Picker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More  iinfo: https://storybook.js.org/docs/configure/story - layout
    layout: 'centered',
  },
  tags: ['autodocs'],

  // Use  to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  /* args: { onClick:  fn() },*/
} satisfies Meta<typeof Picker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: DEFAULT_OPTIONS,
    onChange: fn(),
  },

  /*argTypes: {
    options: {
      control: {
        type: 'object', // Используем текстовый контрол
      },
    },
  },*/
  render: RenderTextValue,
}
/*export const Open: Story = {
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
}*/
