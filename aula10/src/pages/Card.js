import {
    Card,
    CardContent,
    CardActions,
    CardHeader,
    CardMedia,
    Typography,
    Button
} from '@mui/material'

const card = () => {
    return (
        <Card variant="outlined">
            <CardContent >
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent >
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://mui.com/static/images/cards/paella.jpg"
                            alt="Paella dish"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent >
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://mui.com/static/images/cards/paella.jpg"
                            alt="Paella dish"
                        />

                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </CardContent>
        </Card>
    )
}

export default card