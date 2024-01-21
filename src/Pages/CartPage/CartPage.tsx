import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'store/hooks'

type Props = {
    productsInCart?: {
        [id: number]: number
    }
    removeProductFromCart?: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {
    const productsInCart = useAppSelector((state) => state.productInCart)

    return (
        <div>
            <Typography component={'h1'} variant="h4">
                Cart
            </Typography>

            <Grid container spacing={4}>
                <CartProductList
                    changeProductQuantity={changeProductQuantity}
                    removeProductFromCart={removeProductFromCart}
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
