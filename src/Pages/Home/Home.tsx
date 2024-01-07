import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductCart: (id: number, count: number) => void
}

const Home = ({ addProductCart }: Props) => {
    return (
        <>
            <ProductsList addProductCart={addProductCart} />
        </>
    )
}

export default Home
