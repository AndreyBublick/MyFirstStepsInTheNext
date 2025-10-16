import React, { type ComponentPropsWithoutRef } from 'react'
import { Container, Flex } from '@radix-ui/themes'
import s from './Header.module.scss'
import Link from 'next/link'

type Props = ComponentPropsWithoutRef<'header'>
/*рHgGgл*/
export const Header = ({ children, ...rest }: Props) => {
  return (
    <>
      <header className={s.header} {...rest}>
        <Container size='3' maxWidth={'1280px'}>
          <Flex align={'center'} justify={'between'} gapX={'15px'} py={'12px'} pl={'60px'} pr={'64px'}>
            <Link className={s.logo} href={'/'}>
              Inctagram
            </Link>
            <Flex align={'center'} justify={'end'} gapX={'24px'} flexGrow={'1'} style={{ color: 'white' }}>
              {children}
            </Flex>
          </Flex>
          <hr />
        </Container>
      </header>
    </>
  )
}
