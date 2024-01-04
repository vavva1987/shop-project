import { Container } from '@mui/material'
import Home from '../Pages/Home/Home'

type Props = {
    addProductCart: (id: number, count: number) => void
}

const Main = ({ addProductCart }: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            <Home addProductCart={addProductCart} />
        </Container>
    )
}

export default Main
