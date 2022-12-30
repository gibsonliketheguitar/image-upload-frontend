import Image from 'next/image'
import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@mui/material';

export type T_PhotoCard = {
    title: string,
    imgURL: string,
}

const Item = styled(Box)(({ theme }: any) => ({
}));

export function Card(props: T_PhotoCard) {
    const { imgURL, title } = props
    const [isLoading, setLoading] = useState(true)

    const handleLoading = () => {
        console.log('Done')
        setLoading(false)
    }
    return (
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Item sx={{ position: 'relative', height: '200px', width: '300px' }}>
                <Image fill
                    alt={title}
                    onLoadingComplete={handleLoading}
                    src={imgURL}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        objectFit: 'cover',
                    }}
                />
                <Skeleton
                    variant='rectangular'
                    animation='pulse'
                    width={300}
                    height={200}
                    sx={{
                        visibility: isLoading ? 'initial' : 'hidden',
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'grey'
                    }}
                />
            </Item>

        </Grid>
    )
}