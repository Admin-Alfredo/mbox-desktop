import React, { createContext, useEffect } from "react";
import { TagAudio } from "../../components/Player";
import reducer from "./reducer";
import useAsyncReducer from "./useAsyncReducer";

const TrackContext = createContext({})
const initilState = {
  playlist: [],
  folders: [],
  playing: null,
}

export const TrackProvider = (props) => {
  const [state, dispatch] = useAsyncReducer(reducer, initilState)

  useEffect(() => {
    dispatch({ type: "loadInitialState" })
      .then(() => console.log("LOADED..."))
  }, [])

  return (
    <TrackContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TrackContext.Provider>
  )
}


export default TrackContext