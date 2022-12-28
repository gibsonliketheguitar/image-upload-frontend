import Head from 'next/head'
import { Box, Button, Container, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { PhotoList } from 'components/PhotoList'
import { UploadButton } from 'components/UploadButton'
import { Search } from 'components/Search'
import theme from 'styles/theme'
import { T_PhotoCard } from 'components/PhotoList/card'

const genImages = () => {
  const res: any = []
  for (let i = 0; i < 20; i++) {
    res.push({
      imgURL: `https://picsum.photos/seed/200/400`,
      title: 'test' + i,
    })
  }
  return res
}

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [images, setImages] = useState<[]>([])

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setImages(genImages)
      }, 1000)
    }
    fetchData()
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  // word1, word2
  function filter(images: T_PhotoCard[]) {
    if (search.length === 0) return images
    const wordMap: any = new Set()
    return images.filter((img: any) => {
      for (const [word] of wordMap) {
        if (img.title.contains(word)) return true
      }
      return false
    })
  }

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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Search value={search} onChange={handleSearch} />
          <UploadButton />
        </Box>
        <PhotoList data={filter(images)} />
      </Container>
    </>
  )
}

