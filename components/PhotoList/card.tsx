import Image from 'next/image'
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export type T_PhotoCard = {
    title: string,
    imgURL: string,
}

const Item = styled(Box)(({ theme }: any) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

export function Card(props: T_PhotoCard) {
    const { imgURL, title } = props
    return (
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Item>
                <Image
                    height={200}
                    width={300}
                    src={imgURL}
                    alt={title}
                />
            </Item>

        </Grid>
    )
}