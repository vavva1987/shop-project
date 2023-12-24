import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{ marginBottom: '30px' }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    (id, title, type, description, capacity, price) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductListItem
                                title={product.title}
                                type={product.type}
                                description={product.description}
                                capacity={product.capacity}
                                price={product.price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
