<template>
  <transition name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight">
    <div class="bubble grow"
         :class="classObject"
         :style="styleObject"
         @click="showBig = true">
      <p>{{ text }}</p>
      <ul v-show="showBig">
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <component :is="example" v-show="showBig"></component>
      <button v-if="showBig" type="button" class="close" @click.prevent="dismiss" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </transition>
</template>

<script>
import mixins from '@/mixins/mixins.js'

export default {
  name: 'bubble',
  props: ['text', 'example', 'list', 'rand'],
  mixins: [mixins],
  data () {
    return {
      showBig: false
    }
  },
  computed: {
    classObject () {
      return {
        big: this.showBig
      }
    },
    styleObject () {
      return {
        left: this.getRandomNumberMinMax(10 - this.rand, this.getWindowWidth() - 210) + 'px',
        top: this.getRandomNumberMinMax(10 - this.rand, this.getWindowHeight() - 280) + 'px'
      }
    }
  },
  methods: {
    dismiss () {
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
.bubble p, .bubble li {
  padding-left: 20px;
  padding-right: 20px;
}
.bubble p {
  text-align: center;
  padding-top: 50px;
}
.bubble li {
  font-size: 40%;
  text-align: left;
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
