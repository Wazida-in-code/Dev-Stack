import type color from "./components/Technologies/color"

export interface techType {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: Badge
}

export type Badge = keyof typeof color