import { baseApi } from '@/app/api/api'
import type { BaseResponse } from '@/app/api/types'

import { characterSchema, type CharacterType, getCharactersSchema } from '@/features/cards/lib/types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query<BaseResponse<CharacterType>, string>({
      query: page => ({
        url: '/character',
        params: { page },
      }),
      extraOptions: { dataSchema: getCharactersSchema },
    }),
    getCharacter: build.query<CharacterType, string>({
      query: id => `/character/${id}`,
      extraOptions: { dataSchema: characterSchema },
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterQuery } = cardsApi
