const initialState = {
    hotels: [],
}

const hotel = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOTELS_PENDING':
            return {
                ...state
            }
        case 'GET_HOTELS_REJECTED':
            return {
                ...state
            }
        case 'GET_HOTELS_FULFILLED':
            return {
                ...state,
                hotels: action.payload.data.result
            }
        case 'GET_SEARCHHOTEL_PENDING':
            return {
                ...state
            }
        case 'GET_SEARCHHOTE_REJECTED':
            return {
                ...state
            }
        case 'GET_SEARCHHOTE_FULFILLED':
            // console.log(action.payload)
            return {
                ...state,
                hotels: action.payload.data.result
            }
        default:
            return state;
    }

}

export default hotel;