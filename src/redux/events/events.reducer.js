import events from '../../components/Events'

const storage = events
const INITIAL_STATE = {
    
    eventItems:storage
}

const eventReducer = (state= INITIAL_STATE, action) => {

    switch (action.type) {
        case "ADD_EVENT":
            // console.log('state.eventItems', state.eventItems)
            const existingeventItem = state.eventItems.find(eventItem=>eventItem.id===action.payload.id)
            if (state.eventItems.length===0){
                return{
                    ...state,
                    eventItems: [...state.eventItems, action.payload]
                };
            }else if(!existingeventItem){
                return{
                    ...state,
                    eventItems: [...state.eventItems, action.payload]
                };
            }
        
        case "REMOVE_EVENT":
            return{
                ...state,
                eventItems: state.eventItems.filter( eventItem=>eventItem.id!==action.payload.id )
            };

        case "USER_LOGOUT":
            return{
                ...state,
                eventItems:storage
            }

        default:
            return state;
    }
}

export default eventReducer;