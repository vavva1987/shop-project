import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductCart: (id: number, count: number) => void
}

const Home = ({ addProductCart }: Props) => {
    return (
        <>
            <ProductsList addProductCart={addProductCart} />
            <Reviews />
        </>
    )
}

export default Home
