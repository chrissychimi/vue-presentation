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
export default {
  name: 'bubble',
  props: ['text'],
  data () {
    return {
      show: true,
      styleObject: {
        left: this.rand() + 'px',
        top: this.rand() + 'px'
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
  position: relative
}
.bubble p {
  text-align: center;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
