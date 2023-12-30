import { Roboto_Slab, Roboto_Serif, Roboto_Mono } from 'next/font/google'

export const title_alt = Roboto_Mono({ subsets: ['latin'] })

export const text = Roboto_Slab({ 
    subsets: ['latin'],
    weight: ['400', '600']
})

export const title = Roboto_Serif({
    subsets: ['latin'],
    weight: ['300', '600']
})