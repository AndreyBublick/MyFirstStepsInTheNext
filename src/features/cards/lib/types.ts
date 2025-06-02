import { z } from 'zod'
export const baseResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    info: z.object({
      next: z.string(),
      count: z.number().int(),
      pages: z.number().int(),
      prev: z.string().nullable(),
    }),
    results: schema,
  })

export const characterSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  status: z.enum(['Alive', 'Dead', 'unknown']),
  species: z.string(),
  type: z.string(),
  gender: z.enum(['Female', 'Male', 'Genderless', 'unknown']),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string(),
  episode: z.string().array(),
  url: z.string(),
  created: z.string(),
})

export type CharacterType = z.infer<typeof characterSchema>

export type LocationType = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export type EpisodeType = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

/*type CharacterGenderType = 'Female' | 'Male' | 'Genderless' | 'unknown'

type ExtraDataType = {
  name: string
  url: string
}*/
export const getCharacterSchema = baseResponseSchema(characterSchema)

export const getCharactersSchema = baseResponseSchema(characterSchema.array())
