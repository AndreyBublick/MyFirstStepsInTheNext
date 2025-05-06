'use client'
import React, { type ComponentPropsWithoutRef } from 'react'
import { useLoader } from '@/hooks/useLoader'

type Props = ComponentPropsWithoutRef<'div'>

export default function Layout(props: Props) {
  useLoader()

  return <>{props.children}</>
}
