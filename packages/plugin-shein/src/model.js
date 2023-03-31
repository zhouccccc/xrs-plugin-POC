export default {
    namespace: 'shein',

    state: {
        name: 'shein1',
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
