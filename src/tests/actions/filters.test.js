import moment from 'moment'
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should set the text filter with a value', () => {
  const text = 'rent'
  const result = setTextFilter(text)
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should set the text filter with no value', () => {
  const result = setTextFilter()
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should set the sorting to amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should set the sorting to date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})
