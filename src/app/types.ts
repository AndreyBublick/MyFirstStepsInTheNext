export type CharacterType = {
  id: number
  name: string
  status: CharacterStatusType
  species: string
  type: string
  gender: CharacterGenderType
  origin: ExtraDataType
  location: ExtraDataType
  image: string
  episode: string[]
  url: string
  created: string
}

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

export type CharacterStatusType = 'Alive' | 'Dead' | 'unknown'

type CharacterGenderType = 'Female' | 'Male' | 'Genderless' | 'unknown'

type ExtraDataType = {
  name: string
  url: string
}

/*type ParamsType = {
  page: number
}*/

export type Nullable<T> = T & null
