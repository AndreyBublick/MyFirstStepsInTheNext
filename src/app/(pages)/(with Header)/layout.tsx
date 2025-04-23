import { type ComponentPropsWithoutRef } from 'react'
import Header from '@/features/header/ui/Header'
import s from './Layout.module.scss'
type Props = ComponentPropsWithoutRef<'div'>

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <main {...props} className={s.main} />
    </>
  )
}
