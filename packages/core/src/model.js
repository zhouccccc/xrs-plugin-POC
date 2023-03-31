export default {
    namespace: 'core',

    state: {
        name: 'core',
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
