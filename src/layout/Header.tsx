import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/logo/Logo'
import Menu from 'components/menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
