<template>
  <transition name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight">
    <div class="bubble grow"
         :style="styleObject"
         v-if="show" @dblclick="dismiss" @mouseover="showExample = true" @mouseout="showExample = false">
      <p>{{ text }}</p>
      <component :is="example" v-show="showExample"></component>
    </div>
  </transition>
</template>

<script>
import mixins from '@/mixins/mixins.js'

export default {
  name: 'bubble',
  props: ['text', 'example'],
  mixins: [mixins],
  data () {
    return {
      show: true,
      showExample: false,
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
.grow { transition: all .2s ease-in-out; }
.grow:hover { 
  z-index: 10;
  top: 50%!important;
  left: 50%!important;
  transform: translate(-50%, -50%) scale(3.1);
}
.grow:hover p {
  padding-top: 20px;
}
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
  padding-left: 20px;
  padding-right: 20px;
}
</style>
