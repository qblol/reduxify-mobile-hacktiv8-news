export default (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_NEWS':
      return action.payload.news.filter(
        berita => berita.title.toLowerCase()
        .match(action.payload.title.toLowerCase())
      )
    default:
      return state
  }
}
