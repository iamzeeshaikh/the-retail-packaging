import type { CCategory, CategoryMap } from './types'
import { categoriesA } from './set-a'
import { categoriesB } from './set-b'

export type { CCategory, CSection, CategoryVariant } from './types'

const ALL: CategoryMap = { ...categoriesA, ...categoriesB }

export const categoryContent = (slug: string): CCategory | undefined => ALL[slug]
export const categoryContentCount = Object.keys(ALL).length
