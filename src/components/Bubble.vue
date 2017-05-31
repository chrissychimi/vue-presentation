<template>
  <transition name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight">
    <div class="bubble grow"
         :class="classObject"
         :style="styleObject"
         v-if="show" @click="showBig = true">
      <p>{{ text }}</p>
      <component :is="example" v-show="showBig"></component>
      <button v-if="showBig" type="button" class="close" @click="dismiss" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
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
      showBig: false,
      styleObject: {
        left: this.getRandomNumberMinMax(10, this.getWindowWidth() - 210) + 'px',
        top: this.getRandomNumberMinMax(10, this.getWindowHeight() - 210) + 'px'
      }
    }
  },
  computed: {
    classObject () {
      return {
        big: this.showBig
      }
    }
  },
  methods: {
    dismiss () {
      this.show = false
      this.$emit('remove')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grow { transition: all .2s ease-in-out; }
.grow.big { 
  z-index: 10;
  top: 50%!important;
  left: 50%!important;
  transform: translate(-50%, -50%) scale(3.1);
}
.grow.big p {
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
.close {
  position: absolute;
  top: 85%;
  text-align: center;
  margin-left: -5%;
  background-color: transparent;
  border: none;
  font-size: 20px;
}
</style>
