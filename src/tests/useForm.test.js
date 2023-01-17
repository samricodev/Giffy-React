import { act, renderHook } from '@testing-library/react'
import useForm from '../hooks/useForm'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup()
  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('should change raiting', () => {
  const { result } = setup()
  act(() => {
    result.current.updateRating('g')
  })

  expect(result.current.rating).toBe('g')
})

test('should use initial keyword ', () => {
  const { result } = setup({initialKeyword:'matrix'})

  expect(result.current.keyword).toBe('matrix')
})
