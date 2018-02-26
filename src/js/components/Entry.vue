<template>
    <div class="text-right entrybox">
        <div class="entry">
            <p class="answer" v-if="input">{{ input }}</p>
            <p class="answer" v-else>0</p>
        </div>
        <div class="history">
            <p v-if="history">{{ history }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { RESET_STATE, SWITCH_VALUE } from '../store/mutation-types'
export default {
  computed: mapState([
      'input',
      'history',
    ]),

  watch: {
      input() {
          if(this.input.length > 8) {
              this.$store.commit(RESET_STATE)
              this.$store.commit(SWITCH_VALUE, {type: 'history', message: 'DIGIT LIMIT MET'})
              
          }
      }
  }
}
</script>

