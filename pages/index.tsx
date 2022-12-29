import Head from 'next/head'
import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getData } from './api/photo'
import theme from 'styles/theme'

import { PhotoList } from 'components/PhotoList'
import { T_PhotoCard } from 'components/PhotoList/card'
import { Search } from 'components/Search'
import { UploadButton } from 'components/UploadButton'

export default function Home(props: any) {
  const [search, setSearch] = useState<string>('')
  const [images, setImages] = useState<T_PhotoCard[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  function filter(images: T_PhotoCard[]) {
    if (search.length === 0 || images.length === 0) return images
    const wordMap: any = new Set()
    const words = search.trim().split(' ')

    words.forEach((word) => wordMap.add(word))

    return images.filter((img: T_PhotoCard) => {
      for (const [word] of wordMap) {
        if (img.title.includes(word)) return true
      }
      return false
    })
  }

  //If search is empty get all images
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/photo')
      const { data } = await response.json()
      setImages(data)
    }

    if (search.length < 2) fetchData()
  }, [search])

  useEffect(() => {
    console.log('what is images', images)
  }, [images])

  return (
    <>
      <Head>
        <title>Upload Image</title>
        <meta name="description" content="Image Upload" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100vh',
          padding: theme.spacing(4)
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing(4) }}>
          <Search value={search} onChange={handleSearch} />
          <UploadButton />
        </Box>

        <PhotoList data={filter(images)} />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getData()
  return { props: { props: { data } } } // will be passed to the page component as props
}
