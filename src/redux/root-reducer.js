import { combineReducers } from "redux";

import eventReducer from "./events/events.reducer.js";
import CalenderlistReducer from './calendarlist/calendarlist.reducer.js'

const rootReducer = combineReducers({
    events: eventReducer,
    calenderlist:CalenderlistReducer
})

export default rootReducer