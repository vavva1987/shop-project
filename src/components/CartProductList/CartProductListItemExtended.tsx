import { Card, CardContent, Grid } from '@mui/material'
import { Products } from 'utils/productsArray'

type Props = {
    product: Products
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one product: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
