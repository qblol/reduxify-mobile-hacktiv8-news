import { combineReducers } from 'redux'
import NewsReducers from './NewsReducers'
import PeopleReducers from './PeopleReducers'
import SearchNewsReducers from './SearchNewsReducers'
import SearchPeopleReducers from './SearchPeopleReducers'

const rootReducers = combineReducers({
  news: NewsReducers,
  people: PeopleReducers,
  searchNews: SearchNewsReducers,
  searchPeople: SearchPeopleReducers
})

export default rootReducers
