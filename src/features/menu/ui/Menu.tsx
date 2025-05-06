import React, { type ComponentPropsWithoutRef } from 'react'

type MenuProps = {} & ComponentPropsWithoutRef<'ul'>
type MenuPropsItem = {} & ComponentPropsWithoutRef<'li'>
export const Menu = (props: MenuProps) => {
  const { children, className, ...rest } = props

  const classNames = className + ' ' + `flex justify-center gap-x-10`
  return (
    <div className={'bg-[var(--color-dark-700)] border-t border-[var(--color-dark-300)] p-5'}>
      <ul {...rest} className={classNames}>
        {children}
      </ul>
    </div>
  )
}
export const MenuItem = (props: MenuPropsItem) => {
  const { children, className, ...rest } = props

  const classNames = className + ' ' + ``
  return (
    <li className={classNames} {...rest}>
      {children}
    </li>
  )
}
/*
export const  ActiveNavIcon=()=>{}

export const  InactiveNavIcon ()=>{}*/
