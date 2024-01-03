import { Container } from '@mui/material'
import Home from '../Pages/Home/Home'

type Props = {
    addProductCart: (test: number, sum: number, total: string) => void
}

const Main = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            <Home />
        </Container>
    )
}

export default Main
