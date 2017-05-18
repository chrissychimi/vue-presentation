<template>
  <transition name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight">
    <div class="bubble"
         :style="styleObject"
         v-if="show" @click="dismiss">
      <p>{{ text }}</p>
    </div>
  </transition>
</template>

<script>
import mixins from '@/mixins/mixins.js'

export default {
  name: 'bubble',
  props: ['text'],
  mixins: [mixins],
  data () {
    return {
      show: true,
      styleObject: {
        left: this.getRandomNumberMinMax(10, this.getWindowWidth() - 210) + 'px',
        top: this.getRandomNumberMinMax(10, this.getWindowHeight() - 210) + 'px'
      }
    }
  },
  methods: {
    dismiss () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bubble {
  width: 200px;
  height: 200px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 3px solid #314A5E;
  background-color: #42b983;
  position: absolute;
  box-shadow: -5px 5px 5px 0px #A895BC;
}
.bubble p {
  text-align: center;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
