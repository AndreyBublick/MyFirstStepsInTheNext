'use client'
import React from 'react'
import { Cards } from '@/features/cards/ui/Cards'
import Pagination from '@/features/pagination/Pagination'
import { useSearchParams } from 'next/navigation'
import { useGetCharactersQuery } from '@/features/cards/lib/api'
import { CARDS_ON_PAGE, LIST_PAGES, START_PAGE } from '@/app/constans'

const Page = () => {
  const searchParams = useSearchParams()
  const page = searchParams?.get('page') || START_PAGE

  const { data } = useGetCharactersQuery(page)
  return (
    <>
      {data ? (
        <>
          <Pagination totalCount={data.info.count} count={CARDS_ON_PAGE} pageGroup={LIST_PAGES} />
          <Cards items={data?.results || []} />
        </>
      ) : (
        <div>1123</div>
      )}
    </>
  )
}
export default Page
