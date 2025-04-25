'use client'
import { type ComponentPropsWithoutRef, useState } from 'react'
import s from './Layout.module.scss'
import { Header } from '@/features/header/ui/Header'
import { PickerPrev } from '@/shared/picker/PickerPrev/ui/PickerPrev'
import { type Option, Picker } from '@/shared/picker/Picker/ui/Picker'
import { FlagRussia, FlagUnitedKingdom } from '@/_accets/icons/components'
type Props = ComponentPropsWithoutRef<'div'>

export default function Layout(props: Props) {
  const [languages] = useState<Option[]>([
    { id: 1, value: 'Russian', icon: <FlagRussia /> },
    { id: 2, value: 'English', icon: <FlagUnitedKingdom /> },
  ])
  return (
    <>
      <Header>
        <PickerPrev
          /*disabled={true}*/
          options={[
            { id: 1, value: 'Pre-junior' },
            { id: 2, value: 'Junior' },
            { id: 3, value: 'Junior +' },
          ]}
        />

        <Picker options={languages} defaultValue={'lo1'} minWidth={'163px'} />
      </Header>
      <main {...props} className={s.main} />
    </>
  )
}
