export const createReducer = (actionHandlers, initialState) => (
  (state = initialState, action) => {
    const { type } = action
    const handler = actionHandlers[type]

    return handler ? handler(state, action) : state
  }
)

export const createAction = (type) => {
  const actionCreator = (payload, ...rest) => ({
    type,
    payload,
    ...rest,
  })

  actionCreator.type = type
  actionCreator.toString = () => type

  return actionCreator
}
