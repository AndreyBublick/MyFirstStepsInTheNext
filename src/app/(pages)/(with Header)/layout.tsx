import { type ComponentPropsWithoutRef } from 'react'
import s from './Layout.module.scss'
import { Header } from '@/features/header/ui/Header'
import { Picker } from '@/shared/picker/Picker/ui/Picker'
import { Picker2 } from '@/shared/picker/Picker2/ui/Picker2'
type Props = ComponentPropsWithoutRef<'div'>

export default function Layout(props: Props) {
  return (
    <>
      <Header>
        <Picker
          /*disabled={true}*/
          options={[
            { id: 1, value: 'Pre-junior' },
            { id: 2, value: 'Junior' },
            { id: 3, value: 'Junior +' },
          ]}
        />
        <Picker2 />
      </Header>
      <main {...props} className={s.main} />
    </>
  )
}
