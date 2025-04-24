import * as React from 'react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import s from './style.module.scss'
import { clsx } from 'clsx'
import { ArrowIosDownOutline, ArrowIosUp } from '@/_accets/icons/components'

type SelectItemProps = {
  children: React.ReactNode
  value: string
  className?: string
  disabled?: boolean
}

export const Picker2 = () => (
  <Select.Root>
    <Select.Trigger className={s.Trigger} aria-label='Food'>
      <Select.Value placeholder='Select a fruit…' />
      <Select.Icon className={s.Icon}>
        <ArrowIosDownOutline />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={s.Content} position='popper'>
        <Select.ScrollUpButton className={s.ScrollButton}>
          <ArrowIosUp />
        </Select.ScrollUpButton>
        <Select.Viewport className={s.Viewport}>
          <Select.Group>
            <SelectItem value='beef'>Beef</SelectItem>
            <SelectItem value='chicken'>Chicken</SelectItem>
            <SelectItem value='lamb'>Lamb</SelectItem>
            <SelectItem value='pork'>Pork</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={s.ScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx(s.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={s.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)
SelectItem.displayName = 'SelectItem'
