import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import CartPage from 'Pages/CartPage/CartPage'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const addProductCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '50px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductCart={addProductCart} />}
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
