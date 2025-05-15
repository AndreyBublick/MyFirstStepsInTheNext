'use client'
import React, { type ComponentPropsWithoutRef } from 'react'
import s from './Layout.module.scss'
import { useLoader } from '@/hooks/useLoader'
import { Menu, MenuItem } from '@/features/menu/ui/Menu'
import Link from 'next/link'
import {
  Home,
  HomeOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  Search,
  SearchOutline,
} from '@/_accets/icons/components'
import { useIsMobile } from '@/hooks/useMobile'
import { usePathname } from 'next/navigation'

type Props = ComponentPropsWithoutRef<'div'>
const HOME_PAGE = '/'
export default function Layout(props: Props) {
  useLoader()

  const isActive = (href: string) => {
    if (href === HOME_PAGE) {
      return href === pathname
    }
    return pathname.startsWith(href)
  }
  const pathname = usePathname()
  const isMobile = useIsMobile() || true
  const classNameActiveElement = 'text-[var(--color-accent-500)]'
  return (
    <>
      <main {...props} className={s.main} />
      {isMobile && (
        <Menu className={'text-[var(--color-light-100)]'}>
          <MenuItem>
            <Link href={'/'}>{isActive('/') ? <Home className={classNameActiveElement} /> : <HomeOutline />} </Link>
          </MenuItem>
          <MenuItem>
            <Link href={'/plus'}>
              {isActive('/plus') ? <PlusSquare className={classNameActiveElement} /> : <PlusSquareOutline />}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={'/messages'}>
              {isActive('/messages') ? <MessageCircle className={classNameActiveElement} /> : <MessageCircleOutline />}
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href={'/characters'}>
              {isActive('/characters') ? <Person className={classNameActiveElement} /> : <PersonOutline />}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={'/search'}>
              {isActive('/search') ? <Search className={classNameActiveElement} /> : <SearchOutline />}
            </Link>
          </MenuItem>
        </Menu>
      )}
    </>
  )
}
