export default {
    namespace: 'shein',

    state: {
        name: 'shein',
    },

    effects: {},

    reducers: {
        updateName(state, { payload }) {
            return {
                ...state,
                name: payload
            }
        }
    }

}
