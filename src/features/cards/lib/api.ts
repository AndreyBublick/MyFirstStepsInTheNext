import { baseApi } from '@/app/api/api'
import type { BaseResponse } from '@/app/api/types'
import type { CharacterType } from '@/app/types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query<BaseResponse<CharacterType>, string>({
      query: page => ({
        url: '/character',
        params: {
          page,
        },
      }),
    }),
    getCharacter: build.query<CharacterType, string>({
      query: id => `/character/${id}`,
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterQuery } = cardsApi
