'use client'
import React from 'react'
import { Page } from '@/shared/page/Page'
import { Cards } from '@/features/cards/ui/Cards'
import { useSearchParams } from 'next/navigation'
import Pagination from '@/features/pagination/Pagination'
import { useGetCharactersQuery } from '@/features/cards/lib/api'
import { CARDS_ON_PAGE, LIST_PAGES, START_PAGE } from '@/app/constans'

const PageCharacters = () => {
  const searchParams = useSearchParams()
  const page = searchParams?.get('page') || START_PAGE

  const { data } = useGetCharactersQuery(page)
  return (
    <Page>
      {data ? (
        <>
          <Pagination totalCount={data.info.count} count={CARDS_ON_PAGE} pageGroup={LIST_PAGES} />
          <Cards items={data?.results || []} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  )
}
export default PageCharacters
