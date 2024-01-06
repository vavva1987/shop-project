import { Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import { Products, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Typography component={'h1'} variant="h4">
                Cart
            </Typography>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {productsInCart[+productId]}:{''}
                        {productsObject[+productId].price}
                    </div>
                ))}
            </div>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
