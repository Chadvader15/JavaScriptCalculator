<template>
  <button @click="click">{{ text }}</button>
</template>

<script>
import { mapState } from 'vuex'
import { RESET_STATE, UPDATE_VALUE, RESET_INPUT, SWITCH_VALUE, UNDO_LATEST, CALCULATE_VALUE } from '../store/mutation-types'
export default {
    props: ['text', 'value'],
    
    data() {
        return {
            numbers: ['0','1','2','3','4','5','6','7','8','9'],
            operators: ['+', '-', '/', '*'],
            translations: {
                '+': '+',
                '-': '-',
                '/': '÷',
                '*': 'x'
            },
        }
    },

    computed: mapState([
      'input',
    ]),

    methods: {
        click() {
            if(this.value === 'ac') {
                this.$store.commit(RESET_STATE)
            }

            if(this.value === 'c') {
                this.$store.commit(UNDO_LATEST)
            }

            if(this.numbers.includes(this.value)) {
                this.$store.commit(UPDATE_VALUE, {type: 'input', message: this.value})
            }

            if(this.operators.includes(this.value)) {
                this.$store.commit(UPDATE_VALUE, {type: 'input', message: this.translations[this.value]})
            }

            if(this.value === '=') {
                this.$store.commit(CALCULATE_VALUE)
            }

            if(this.value === '.') {
                let chars = this.input.split("")
                let dotFound = false
                for(let c of chars) {
                    console.log(c)
                    if(c === '.') {
                        dotFound = true
                    }

                    if(this.operators.includes(c)) {
                        dotFound = false
                    }
                }

                if(!dotFound) {
                    this.$store.commit(UPDATE_VALUE, {type: 'input', message: this.value})
                }
            }
        }
    }
}
</script>
