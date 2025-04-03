import { baseApi } from '@/app/api/api'
import type { BaseResponse } from '@/app/api/types'
import type { CharacterType } from '@/app/types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query<BaseResponse<CharacterType>, void>({
      query: () => '/character',
    }),
    getCharacter: build.query<CharacterType, number>({
      query: id => `/character/${id}`,
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterQuery } = cardsApi
