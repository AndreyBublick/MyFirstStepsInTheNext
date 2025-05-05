import React, { type ComponentPropsWithoutRef, type ElementType } from 'react'
import clsx from 'clsx'

import s from './style.module.scss'

export type SizeProps = 'lg' | 'md' | 'sm'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text'
  size?: SizeProps
  fullWidth?: boolean
  asChild?: boolean
  as?: T
} & ComponentPropsWithoutRef<T>

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    asChild = false,
    as: Component = 'button',
    ...rest
  } = props

  const classNames = clsx(s.button, s[variant], className, s[size], fullWidth && s.fullWidth)

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement

    return React.cloneElement(child, {
      // @ts-ignore
      className: clsx(classNames, child.props.className),
      ...rest,
    })
  } else {
    return (
      <Component className={classNames} {...rest}>
        {children}
      </Component>
    )
  }
}
