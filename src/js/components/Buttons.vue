<template>
  <div class="buttons">
      <chad-button class="red" value="ac" text="AC"/>
      <chad-button class="red" value="c" text="C"/>
      <chad-button class="brown" value="/" text="÷"/>
      <chad-button class="brown" value="*" text="x"/>

      <chad-button value="7" text="7"/>
      <chad-button value="8" text="8"/>
      <chad-button value="9" text="9"/>
      <chad-button class="brown" value="-" text="-"/>

      <chad-button value="4" text="4"/>
      <chad-button value="5" text="5"/>
      <chad-button value="6" text="6"/>
      <chad-button class="brown" value="+" text="+"/>

      <chad-button value="1" text="1"/>
      <chad-button value="2" text="2"/>
      <chad-button value="3" text="3"/>
      <button class="invisible">N</button>

      <chad-button class="zero-button" value="0" text="0"/>
      <chad-button value="." text="."/>
      <chad-button class="equal-button" value="=" text="="/>
  </div>
</template>

<script>
import ChadButton from './Button'

export default {
  components: {
      ChadButton,
  }
}
</script>

