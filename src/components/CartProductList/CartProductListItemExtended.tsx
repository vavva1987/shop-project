import { Button, Card, CardContent, Grid } from '@mui/material'
import { Products } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Products
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    removeProductFromCart,
    productCount,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one product: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            changeProductQuantity(product.id, productCount - 1)
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
