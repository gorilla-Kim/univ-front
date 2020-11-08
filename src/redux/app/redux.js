const initialState = {
    currentViewKey: '',
    breadcrumbList: [],
    toastMessage: ''
}

export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        CLEAR_STORE: '@APP/CLEAR_STORE',
        SET_TOAST_MESSAGE: '@APP/SET_TOAST_MESSAGE',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE,
        }),
        setToastMessage: (message) => ({
            type: Action.Types.SET_TOAST_MESSAGE,
            message
        }),
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


