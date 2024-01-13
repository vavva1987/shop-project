import {
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'Гарний телефон , досить великий (16см / 7,5см) але тримати комфортно , екран дуже яскравий , батарея тримає 12-13 годин активного використання (може і більше ,не заряджаю більше 85%)',
        },

        {
            name: 'John',
            text: 'Всім задоволений, памяті вистачає. Приємний на вигляд і дотик. Глюків поки не було',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    return (
        <>
            <Typography variant="h4" component={'h2'} sx={{ margin: '40px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text }) => (
                    <Card variant="outlined" sx={{ margin: '20px 0' }}>
                        <CardContent>
                            <div>{name}:</div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form action="">
                <h3>Please live your review</h3>
                <div>
                    <TextField size="small" placeholder="Your name" />
                </div>
                <br />
                <div>
                    <TextareaAutosize minRows={5} placeholder="Your text" />
                </div>
            </form>
        </>
    )
}

export default Reviews
