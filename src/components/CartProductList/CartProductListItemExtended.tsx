import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { Products } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

type Props = {
    product: Products
    productCount: number
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one product: {product.price}</p>
                    {/* <p>Count: {productCount}</p> */}
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={onDecrementClick}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={count} />
                        <Button
                            variant="outlined"
                            onClick={onIncrementClick}
                            disabled={count >= 10}
                        >
                            +
                        </Button>
                    </div>
                    <div className="btns-wrap"></div>
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
