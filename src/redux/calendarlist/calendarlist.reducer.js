const INITIAL_STATE = {
    calendarlist: []
  };

const CalenderlistReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_CALENDAR_LIST":
            // console.log('state.calendarlist', state.calendarlist)
            const existingeventItem = state.calendarlist.find(eventItem=>eventItem.id===action.payload.id)
            if (state.calendarlist.length===0){
                return{
                    ...state,
                    calendarlist: [...state.calendarlist, action.payload]
                };
            }else if(!existingeventItem){
                return{
                    ...state,
                    calendarlist: [...state.calendarlist, action.payload]
                };
            }
            
        default:
        return state;
    }
};

export default CalenderlistReducer