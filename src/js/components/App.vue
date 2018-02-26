<template>
    <div class="container">
      <div class="calculator">
        <div class="title text-center">ELECTRONIC CALCULATOR</div>
        <entry/>
        <buttons/>
      </div>
    </div>
</template>

<script>
import Entry from './Entry'
import Buttons from './Buttons'
export default {
  components: {
    Entry,
    Buttons,      
  }
}
</script>
