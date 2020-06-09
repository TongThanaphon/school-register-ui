import React from 'react'
import { render } from '@testing-library/react'
import SchoolRegister from './pages'

test('renders learn react link', () => {
  const { getByText } = render(<SchoolRegister />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
