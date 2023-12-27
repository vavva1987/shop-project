import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.scss'

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
                <div className="btns-wrap">
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                    <Button variant="outlined">Add to card</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
