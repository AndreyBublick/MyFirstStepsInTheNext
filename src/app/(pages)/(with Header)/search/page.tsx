'use client'
import React, { useCallback, useState } from 'react'
import { Eye, EyeOutline, Search } from '@/_accets/icons/components'
import {Input, Page} from '@/shared/ui'

const PageCharacters = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const closeShowPassword = useCallback(() => {
    setIsShowPassword(false)
    console.log(false)
  }, [])

  const openShowPassword = useCallback(() => {
    setIsShowPassword(true)
    console.log(true)
  }, [])

  return (
    <Page>
      <h1>PageCharacters</h1>
      <br />
      <br />
      <Input placeholder={'Epam@epam.com'} type={'email'} size='lg' label={'andrew'}></Input>
      <Input
        disabled
        placeholder={'Epam@epam.com'}
        size={'md'}
        onIconClick={isShowPassword ? closeShowPassword : openShowPassword}
        type={isShowPassword ? 'text' : 'password'}
        icon={isShowPassword ? <Eye color={'white'} /> : <EyeOutline />}
      />

      <Input
        placeholder={'Input search'}
        size={'lg'}
        error={true}
        helperText={'Error'}
        iconPosition={'left'}
        icon={<Search />}
      />
    </Page>
  )
}
export default PageCharacters
