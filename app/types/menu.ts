export type Language = 'hindi' | 'english' | 'marathi'

export type MenuItem = {
    name: {
        hindi: string
        english: string
        marathi: string
    }
    quantity: string
    price: number
    off_price: number
    image: string
    tags: string[]
}