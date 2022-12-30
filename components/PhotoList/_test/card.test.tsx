import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Card } from '../card'

const data = {
    title: 'Picture Photo Card',
    imgURL: 'https://picsum.photos/200'
}

describe('Photo Card', () => {
    test('should render title as alt and src with imgURL', () => {
        render(<Card {...data} />)

        const image = screen.getByAltText('Picture Photo Card')
        expect(image).toBeDefined()

        const imageEncodedURI = encodeURIComponent('https://picsum.photos/200')
        expect.stringContaining(imageEncodedURI)
        expect(image.getAttribute('src')).toEqual(expect.stringContaining(imageEncodedURI))

    })
})