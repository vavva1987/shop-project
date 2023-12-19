import { clsx } from 'clsx'
import classes from './header.module.scss'

type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1 className={classes.title}>
            Hello world {title} {num}
        </h1>
    )
}

export default Header
