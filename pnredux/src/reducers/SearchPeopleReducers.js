export default (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_PEOPLE':
      return action.payload
    default:
      return state
  }
}
