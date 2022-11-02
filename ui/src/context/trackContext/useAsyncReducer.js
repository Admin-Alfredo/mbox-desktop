import { useState } from "react"

export default function (reducer, initialState) {
  const [state, setState] = useState(initialState)

  const dispatch = async action => {
    const result = reducer(state, action)
    try {
      const newState = await result;
      setState(newState)
    } catch (err) {
      console.error(err)
      setState(err)
    }
  }

  return [state, dispatch]
}