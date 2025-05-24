'use client'
import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import s from './style.module.scss'
import { clsx } from 'clsx'
import { ArrowIosDownOutline, ArrowIosUp } from '@/_accets/icons/components'
import { Flex } from '@radix-ui/themes'

export type Option = {
  id: number
  value: string
  icon?: React.ReactNode
}

export type PropsPicker = {
  defaultValue?: string
  options: Option[]
  disabled?: boolean
  title?: string
  onChange?: (value: string) => void
  minWidth?: string
}

type SelectItemProps = {
  children: React.ReactNode
  className?: string
  value: string
}

const checkValueinObject = (array: Option[], value: string | undefined) => {
  for (const option of array) {
    if (option.value === value) {
      return value
    }
  }
  return array[0].value
}

export const Picker = ({
  onChange,
  minWidth = '210px',
  options,
  title,
  defaultValue,
  disabled = false,
  /*...rest*/
}: PropsPicker) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(() => checkValueinObject(options, defaultValue))

  const onClickHandler = useCallback((isOpenValue: boolean) => {
    setIsOpen(isOpenValue)
  }, [])
  const onValueChangeHandler = useCallback(
    (newValue: string) => {
      onChange?.(newValue)
      setValue(newValue)
    },
    [onChange],
  )
  const optionsMapped = useMemo(() => {
    return options.map(({ id, value, icon }) => (
      <SelectItem key={id} value={value}>
        <Flex align={'center'} gapX={'12px'}>
          {icon}
          {value}
        </Flex>
      </SelectItem>
    ))
  }, [options])

  return (
    <Select.Root
      value={value}
      open={isOpen}
      onOpenChange={onClickHandler}
      onValueChange={onValueChangeHandler}
      disabled={disabled}
    >
      {/*<Select.Trigger className={s.Trigger} aria-label='select' style={{ width: minWidth }}>*/}
      <Select.Trigger className={s.Trigger} aria-label='select' style={{ minWidth: minWidth }}>
        <Select.Value placeholder='Выбрать…' />
        <Select.Icon className={s.Icon}>{isOpen ? <ArrowIosUp /> : <ArrowIosDownOutline />}</Select.Icon>
        {title && <span className={s.title}>{title}</span>}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={s.Content}
          position='popper'
          style={{ minWidth: 'var(--radix-select-trigger-width)' }}
        >
          <Select.ScrollUpButton className={s.ScrollButton}>
            <ArrowIosUp />
          </Select.ScrollUpButton>
          <Select.Viewport className={s.Viewport}>
            <Select.Group>
              {/*  <SelectItem value='beef'>Beef</SelectItem>
              <SelectItem value='chicken'>Chicken</SelectItem>
              <SelectItem value='lamb'>Lamb</SelectItem>
              <SelectItem value='pork'>Pork</SelectItem>*/}
              {optionsMapped}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.ScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx(s.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        {/* <Select.ItemIndicator className={s.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>*/}
      </Select.Item>
    )
  },
)
SelectItem.displayName = 'SelectItem'
