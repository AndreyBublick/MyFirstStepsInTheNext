'use client'
import React, { type ComponentPropsWithoutRef, useCallback, useState } from 'react'
import { Header } from '@/features/header/ui/Header'
import { PickerPrev } from '@/shared/ui/picker/PickerPrev/ui/PickerPrev'
import { type Option, Picker } from '@/shared/ui/picker/Picker/ui/Picker'
import { FlagRussia, FlagUnitedKingdom } from '@/_accets/icons/components'
import { Radio, RadioGroup } from '../../../shared/ui/radio'
import { useLoader } from '@/hooks/useLoader'
import { useAppDispatch, useAppSelector } from '@/hooks/RTK'
import { login, logout, selectIsLoggedIn } from '@/app/appSlice'
import { Button } from '../../../shared/ui/button'
import { Check } from '@/shared/ui/check/ui/Check'

type Props = ComponentPropsWithoutRef<'div'>

export default function Layout(props: Props) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const dispatch = useAppDispatch()

  const [languages] = useState<Option[]>([
    { id: 1, value: 'Russian', icon: <FlagRussia /> },
    { id: 2, value: 'English', icon: <FlagUnitedKingdom /> },
  ])
  useLoader()

  const loginHandler = useCallback(() => {
    dispatch(login())
  }, [dispatch])
  const logoutHandler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <>
      <Header>
        <RadioGroup defaultValue={'GroupRadio'} name={'test'} orientation={'horizontal'}>
          <Radio value={'RadioGroup'} />
          <Radio value={'GroupRadio'} />
        </RadioGroup>
        <PickerPrev
          /*disabled={true}*/
          options={[
            { id: 1, value: 'Pre-junior' },
            { id: 2, value: 'Junior' },
            { id: 3, value: 'Junior +' },
          ]}
        />
        <Check />
        <Picker options={languages} defaultValue={'lo1'} minWidth={'163px'} />
        {!isLoggedIn ? <Button onClick={loginHandler}>login</Button> : <Button onClick={logoutHandler}>logout</Button>}
      </Header>
      {props.children}
    </>
  )
}
