import * as types from './mutation-types'

export default {
    [types.UPDATE_VALUE] (state, payload) {
        if(state.calculated) {
            state.input = ""
            state.calculated = false
        }
        state[payload.type] += payload.message
    },
    
    [types.RESET_STATE] (state) {
        state.input = ''
        state.history = ''
    },

    [types.RESET_INPUT] (state) {
        state.input = ''
    },

    [types.SWITCH_VALUE] (state, payload) {
        state[payload.type] = payload.message
    },

    [types.UNDO_LATEST] (state) {
        state.input = state.input.slice(0,-1)
    },

    [types.CALCULATE_VALUE] (state) {
        state.equation = state.input + '='
        state.input = state.input.replace(/÷/g, '/')
        state.input = state.input.replace(/x/g, '*')
        state.input = eval(state.input).toString()
        state.equation += state.input
        state.calculated = true
        state.history = state.equation
    },
}
