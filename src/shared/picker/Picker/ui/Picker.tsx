'use client'
import s from './Picker.module.scss'
import { type ChangeEvent, type DetailedHTMLProps, type SelectHTMLAttributes, useState } from 'react'

import { ArrowIosDownOutline } from '@/_accets/icons/components'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

export const Picker = ({
  options,
  className,
  onChange,
  value,
  onChangeOption,
  disabled,
  ...restProps
}: SelectPropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const mappedOptions: any[] = options
    ? options.map(o => (
        <option className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : [] /*// map options with key*/

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    /* onChangeOption?.(e.currentTarget.value);*/

    onChange?.(e)
    onChangeOption?.(+e.currentTarget.value)
  }

  const finalSelectClassName =
    s.select + (className ? ' ' + className : '') + (disabled ? ' ' + s.disabled : '') + (isOpen ? ' ' + s.active : '')

  return (
    <>
      <div className={s.select_wrapper}>
        <select
          onClick={() => {
            setIsOpen(prev => !prev)
          }}
          disabled={disabled}
          className={finalSelectClassName}
          onChange={onChangeCallback}
          {...restProps}
          value={value}
        >
          {mappedOptions}
        </select>
        <ArrowIosDownOutline className={s.arrow} />
      </div>
    </>
  )
}

/*const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={clsx(s.Item, className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.ItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})*/
