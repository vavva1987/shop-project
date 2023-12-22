import { Button, Card, CardContent } from '@mui/material'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h2>iPhone 15 Pro</h2>
                <p>This is iPhone 15 Pro</p>
                <div>Type: phone</div>
                <div>Capacity: 128GB</div>
                <div>1000 $</div>
                <Button>Add to card</Button>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
