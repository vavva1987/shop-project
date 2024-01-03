import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addProductCart: (count: number, price: number) => void
}

const ProductsList = ({ addProductCart }: Props) => {
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
                    ({
                        id,
                        title,
                        type,
                        description,
                        capacity,
                        price,
                        images,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                title={title}
                                type={type}
                                description={description}
                                capacity={capacity}
                                price={price}
                                images={images}
                                addProductCart={addProductCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
