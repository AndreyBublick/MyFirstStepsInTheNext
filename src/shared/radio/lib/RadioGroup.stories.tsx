import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { fn } from '@storybook/test'
import { Radio, RadioGroup, type RadioGroupProps } from '@/shared/radio'

const Render = (props: RadioGroupProps) => {
  /* const onOpenChange = (flag: boolean): void => {
     setOpen(flag);
  }*/

  return (
    <>
      <RadioGroup {...props}>
        <Radio value={'RadioGroup'} />
        <Radio value={'GroupRadio'} />
      </RadioGroup>
    </>
  )
}

// More on how to set up stories at:
const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More  info: https://storybook.js.org/docs/configure/story - layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' }, // или 'select' для выпадающего списка
      description: 'Расположение радио-кнопок',
    },
    defaultValue: {
      control: { type: 'text' }, // или 'select' для выпадающего списка
      description: 'Значение по умолчанию',
    },
    disabled: {
      control: { type: 'boolean' }, // или 'select' для выпадающего списка
      description: 'Блокировка',
    },
    required: {
      control: { type: 'boolean' }, // или 'select' для выпадающего списка
      description: 'Обязательны ли radio buttons',
    },
  },

  // Use  to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  /* args: { onClick:  fn() },*/
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultPicker: Story = {
  args: {
    onValueChange: fn(),
    orientation: 'vertical',
    defaultValue: 'RadioGroup',
    name: 'test',
  },

  /*argTypes: {
    options: {
      control: {
        type: 'object', // Используем текстовый контрол
      },
    },
  },*/
  render: Render,
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
