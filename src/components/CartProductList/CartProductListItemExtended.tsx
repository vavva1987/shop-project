import { Button, Card, CardContent, Grid } from '@mui/material'
import { Products } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleLikeState } from '../../store/likeSlice'
import { changeProductQuantity, removeProductFromCart } from 'store/cartSlice'

type Props = {
    product: Products
    productCount: number
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const isLicked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )

    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(toggleLikeState(product.id))}
                    >
                        {isLicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-img">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one product: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        onIncrementClick={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
