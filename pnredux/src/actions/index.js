export const actionSearchNews = (title,news) => {
  return {
    type: 'SEARCH_NEWS',
    payload:{
      title:title,
      news:news
    }
  }
}

export const actionSearchPeople = (name) => {
  return {
    type: 'SEARCH_PEOPLE',
    payload: name
  }
}
