import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    images,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const [color, setColor] = useState<string>('green')

    const changeColor = () => {
        setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
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

                <p>
                    Color: <span className={color}>{color}</span>
                </p>
                <button onClick={changeColor}>Change color</button>

                <div className="product-quantity">
                    <Button variant="outlined" onClick={onDecrementClick}>
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to card</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
