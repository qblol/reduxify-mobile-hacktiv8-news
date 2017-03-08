export const actionSearchNews = (news) => {
  return {
    type: 'SEARCH_NEWS',
    payload: news
  }
}

export const actionSearchPeople = (name) => {
  return {
    type: 'SEARCH_PEOPLE',
    payload: name
  }
}
