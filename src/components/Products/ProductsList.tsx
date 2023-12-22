import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1">
                List of Products
            </Typography>
            <ProductListItem />
        </>
    )
}

export default ProductsList
