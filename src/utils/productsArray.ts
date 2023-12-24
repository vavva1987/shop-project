export type Products = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

export const productsArray: Products[] = [
    {
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
    },
    {
        id: 2,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        id: 3,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '64',
        price: 850,
    },
    {
        id: 4,
        title: 'iPhone 14 Pro max',
        description: 'This is iPhone 14 Pro max',
        type: 'phone',
        capacity: '512',
        price: 2000,
    },
    {
        id: 5,
        title: 'iPhone 15',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
    },
    {
        id: 6,
        title: 'iPhone 14',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 950,
    },
]
