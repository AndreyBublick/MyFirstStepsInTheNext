'use client'
import React, { useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { START_LIST, START_PAGE } from '@/app/constans'

type Props = {
  count: number
  totalCount: number
  pageGroup: number
}
const Pagination = (props: Props) => {
  const { count, totalCount, pageGroup } = props
  /*const params = useSearchParams()*/

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pagesCount = Math.ceil(totalCount / count)
  const pageNumber = Number(searchParams?.get('page') || START_PAGE)
  const listNumber = Number(searchParams?.get('list') || START_LIST)
  const createQueryString = useCallback(
    (name: string, value: number) => {
      if (searchParams) {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value.toString())

        return params.toString()
      }
    },
    [searchParams],
  )

  const activeClassName =
    'relative z-10 inline-flex items-center bg-[var(--color-accent-900)] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-1 ring-[var(--color-light-100)] ring-inset'
  /*border border-[var(--color-light-500)]*/
  const className =
    'relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-[var(--color-light-500)] ring-inset hover:bg-[var(--color-accent-100)] focus:z-20 focus:outline-offset-0 md:inline-flex'
  const disabledClassNameNavigation = 'pointer-events-none opacity-50 cursor-not-allowed'
  const classNameNavigationNext =
    'relative inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-gray-300 ring-inset hover:bg-[var(--color-accent-100)] focus:z-20 focus:outline-offset-0'
  const classNameNavigationPrev =
    'relative inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-gray-300 ring-inset hover:bg-[var(--color-accent-100)]  focus:z-20 focus:outline-offset-0'
  const isFullRenderGroup = pagesCount >= pageGroup * listNumber

  const pagesMapped = Array(Math.ceil(isFullRenderGroup ? pageGroup : pagesCount % pageGroup))
    .fill(null)
    .map((_, i) => {
      const index = pageGroup * listNumber - pageGroup + i + 1

      return (
        <Link
          key={i}
          href={`${pathname}?${createQueryString('page', index)}`}
          aria-current='page'
          className={pageNumber === index ? activeClassName : className}
        >
          {index}
        </Link>
      )
    })

  return (
    <div className='flex items-center justify-between border-t border-gray-200 hite px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Previous
        </a>
        <a
          href={`${pathname}?${createQueryString('list', 2)}`}
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-50'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700 flex gap-1' style={{ color: 'var(--color-light-500)' }}>
            Showing
            <NumberValue value={pageNumber} />
            to
            <NumberValue value={pagesCount} />
            of
            <NumberValue value={totalCount} />
            results
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-xs' aria-label='Pagination'>
            <Link
              href={`${pathname}?${createQueryString('list', listNumber === 1 ? listNumber : listNumber - 1)}`}
              className={
                listNumber === 1 ? classNameNavigationPrev + disabledClassNameNavigation : classNameNavigationPrev
              }
            >
              <span className='sr-only'>Previous</span>
              <svg className='size-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' data-slot='icon'>
                <path
                  fillRule='evenodd'
                  d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>

            {pagesMapped}

            <Link
              href={`${pathname}?${createQueryString('list', pagesCount > pageGroup * listNumber ? listNumber + 1 : listNumber)}`}
              className={
                pagesCount > pageGroup * listNumber
                  ? classNameNavigationNext
                  : classNameNavigationNext + disabledClassNameNavigation
              }
            >
              <span className='sr-only'>Next</span>
              <svg className='size-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' data-slot='icon'>
                <path
                  fillRule='evenodd'
                  d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination

const NumberValue = ({ value }: { value: number }) => {
  return (
    <span className='font-medium md:font-bold' style={{ color: 'var(--color-light-100)' }}>
      {value}
    </span>
  )
}
