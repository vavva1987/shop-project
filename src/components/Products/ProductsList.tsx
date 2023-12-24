import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

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
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
