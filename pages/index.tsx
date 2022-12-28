import Head from 'next/head'
import { Box, Container } from '@mui/material'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Image Upload" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Box>Hello World</Box>
      </Container>
    </>
  )
}
