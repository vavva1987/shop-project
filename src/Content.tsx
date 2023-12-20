import { clsx } from 'clsx'
import './content.scss'

type ContentType = {
    p1: string
    p2: string
    bgColor?: string
}

const Content = ({ p1, p2, bgColor = 'yellow' }: ContentType) => {
    return (
        <div className={bgColor}>
            <p className={clsx('p1')}>{p1}</p>
            <p className={clsx('p2')}>{p2}</p>
        </div>
    )
}

export default Content
