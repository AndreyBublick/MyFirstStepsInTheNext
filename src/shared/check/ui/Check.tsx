import React, { type ChangeEvent, type ComponentPropsWithoutRef, useCallback, useState } from 'react'
import clsx from 'clsx'

import s from './style.module.scss'
import CheckmarkOutline from './CheckmarkOutline'

export type SizeProps = 'lg' | 'md' | 'sm'

export type CheckProps = {
  size?: SizeProps
  fullWidth?: boolean
  title?: string
} & ComponentPropsWithoutRef<'input'>

export const Check = (props: CheckProps) => {
  const { className, title, checked, size = 'md', onChange, ...rest } = props

  const [isChecked, setChecked] = useState(false)

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
      onChange?.(e)
    },
    [onChange],
  )

  const classNames = clsx(s.check_item, className, s[size])

  return (
    <>
      <div className={'flex items-center gap-x-2.5'}>
        <div className={'relative w-4.5 h-4.5'}>
          <input
            onChange={onChangeHandler}
            checked={checked || isChecked}
            type={'checkbox'}
            id={title}
            className={
              classNames +
              'appearance-none bg-[transparent] w-4.5 h-4.5 border-2 border-[var(--color-light-500)] rounded-[2px] checked:bg-[var(--color-light-500)] transition ease-in-out duration-150 cursor-pointer'
            }
            {...rest}
          />

          <CheckmarkOutline
            className={`absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 scale-85 text-[var(--color-dark-900)] pointer-events-none transition ease-in-out duration-150 ${isChecked ? 'opacity-100' : 'opacity-20'}`}
          />
        </div>

        {title && (
          <label className={'cursor-pointer '} htmlFor={title}>
            {title}
          </label>
        )}
      </div>
    </>
  )
}
/* Vector */
