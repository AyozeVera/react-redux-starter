export const set = (content) => {
  return {
    type: 'SET_CONTENT',
    content
  }
}

export const reset = () => {
  return {
    type: 'RESET_CONTENT'
  }
}
