const initialState = {
  content: ''
}

export default function example(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONTENT': return { content: action.content }
    case 'RESET_CONTENT': return { ...initialState }
    default: return state
  }
}
