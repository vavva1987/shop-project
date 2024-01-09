import { Products } from 'utils/productsArray'

type Props = {
    product: Products
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}: {productCount}
        </div>
    )
}

export default CartProductListItem
