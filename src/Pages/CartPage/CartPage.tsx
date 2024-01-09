import { Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography component={'h1'} variant="h4">
                Cart
            </Typography>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
            />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
