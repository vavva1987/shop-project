import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductCart: (count: number, price: number) => void
}

const Home = ({ addProductCart }: Props) => {
    return (
        <>
            <ProductsList addProductCart={addProductCart} />
        </>
    )
}

export default Home
