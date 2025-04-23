import React from 'react'
import { Container } from '@radix-ui/themes'
import s from './Header.module.scss'
import Link from 'next/link'
/*{/*px='20px}*/
const Header = () => {
  return (
    <header className={s.header}>
      <Container size='3' maxWidth={'1280px'}>
        <div className={s.wrapper}>
          <Link className={s.logo} href={'/'}>
            Inctagram
          </Link>
          <div className={s.sub_wrapper}>
            <a href='#'>1</a>

            <a href='#'>2</a>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
