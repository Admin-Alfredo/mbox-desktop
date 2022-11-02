import actions from "./actions";

export default function reducer(state, action) {
  return new Promise((resolve, reject) => {
    if (typeof actions[action.type] != "function")
      return resolve(state)
    const resultState = actions[action.type](state, action.payload)
    if (typeof resultState.then == "function")
      return resultState
        .then(newState => resolve(newState))
        .catch(err => reject({ state, err }))
    return resolve(resultState)
  })
}
