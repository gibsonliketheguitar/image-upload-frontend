import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Card, T_PhotoCard } from './card'

type T_PhotoList = {
    data: T_PhotoCard[] | []
}

export function PhotoList({ data }: T_PhotoList) {
    if (data.length < 1) return <Typography>No Images Found</Typography>
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '600px'
        }}>
            <Typography>{data.length}Images</Typography>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={4}
            >
                {data.map((img: T_PhotoCard, indx) => {
                    return (
                        <Card key={img.title + indx} {...img} />
                    )
                })}
            </Grid>
        </Box>
    )
}

