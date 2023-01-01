import React from 'react'
import { PhotoList } from '../.view'

import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'


describe('Photo List', () => {
    test('should render 2 Photo Card with their respective alt and src data', () => {
        const photoCards = [
            {
                title: 'Picture Photo Card',
                imgURL: 'https://picsum.photos/200'
            },
            {
                title: 'Picture Photo Card2',
                imgURL: 'https://picsum.photos/201'
            }
        ]

        render(<PhotoList data={photoCards} />)

        const image = screen.getByAltText('Picture Photo Card')
        expect(image).toBeDefined()

        const imageEncodedURI = encodeURIComponent('https://picsum.photos/200')
        expect.stringContaining(imageEncodedURI)
        expect(image.getAttribute('src')).toEqual(expect.stringContaining(imageEncodedURI))

        const image2 = screen.getByAltText('Picture Photo Card2')
        expect(image2).toBeDefined()

        const imageEncodedURI2 = encodeURIComponent('https://picsum.photos/201')
        expect(image2.getAttribute('src')).toEqual(expect.stringContaining(imageEncodedURI2))
    })

    test('Empty Array should render No Image Found', () => {
        render(<PhotoList data={[]} />)

        const photoList = screen.getAllByText('No Images Found')
        expect(photoList).toBeDefined()
    })
})