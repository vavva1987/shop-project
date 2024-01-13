import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'

type ProductListItemType = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
    addProductCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    images,
    addProductCart,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card>
            <CardContent
                className="product-list-item"
                sx={{ variant: 'outlined' }}
            >
                <div className="product-img">
                    <img src={images} alt={title} />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">{price} $</div>

                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
                <div className="btns-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductCart(id, count)}
                    >
                        Add to card
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
