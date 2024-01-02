type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const CartHeader = (cartData: Props) => {
    return (
        <div>
            <div>{cartData.cartData.totalCount}</div>
            <div>${cartData.cartData.totalPrice}</div>
        </div>
    )
}

export default CartHeader
