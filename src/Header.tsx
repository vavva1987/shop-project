import { clsx } from 'clsx'
import classes from './header.module.scss'

type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1
            className={clsx(`test ${classes.title}`, {
                [classes.red]: num === 10,
            })}
        >
            Hello world {title} {num}
        </h1>
    )
}

export default Header
