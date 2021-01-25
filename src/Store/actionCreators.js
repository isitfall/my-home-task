import ACTIONS from './actions';

const actionCreator = () => {
    return {
        type: ACTIONS.FETCH_MOVIES_LIST,
        payload: {
            text: "IT'S WORKS!"
        }
    }
}

const asyncActionsCreator = () => (dispatch) => {
    dispatch(actionCreator)
}


export { actionCreator, asyncActionsCreator }
