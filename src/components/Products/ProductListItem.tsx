import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent
                className="product-list-item"
                sx={{ variant: 'outlined' }}
            >
                <h2 className="product-title">iPhone 15 Pro</h2>
                <p className="product-description">This is iPhone 15 Pro</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 128GB</div>
                <div className="product-price">1000 $</div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to card</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
