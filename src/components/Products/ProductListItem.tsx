import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'

type ProductListItem = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
}: ProductListItem) => {
    return (
        <Card>
            <CardContent
                className="product-list-item"
                sx={{ variant: 'outlined' }}
            >
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} GB</div>
                <div className="product-price">{price} $</div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to card</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
