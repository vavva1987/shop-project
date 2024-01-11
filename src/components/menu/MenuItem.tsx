import { Button } from '@mui/material'
import './MenuItem.css'
import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: any
}

const MenuItem = ({ to, children }: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}

export default MenuItem
