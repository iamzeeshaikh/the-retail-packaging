import type { Place } from './types'
import { statesA } from './states-a'
import { statesB } from './states-b'
import { statesC } from './states-c'
import { statesD } from './states-d'
import { citiesA } from './cities-a'
import { citiesB } from './cities-b'

export type { Place, SectionKey, Variant, StateVariant, CityVariant } from './types'

export const states: Place[] = [...statesA, ...statesB, ...statesC, ...statesD]
export const cities: Place[] = [...citiesA, ...citiesB]
export const allPlaces: Place[] = [...states, ...cities]
export const placeBySlug = new Map(allPlaces.map((p) => [p.slug, p]))

/** Cities that sit inside a given state. */
export const citiesIn = (stateSlug: string) =>
  cities.filter((c) => c.stateSlug === stateSlug)
