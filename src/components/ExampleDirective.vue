<template>
  <div id="example">
    <input v-model="redness" type="range">
    <p>Some words should be <span v-red="redness">red</span>!</p>
  </div>
</template>

<script>
export default {
  name: 'example-directive',
  data () {
    return {
      redness: 0
    }
  },
  directives: {
    red: {
      bind (el) {
        el.style.color = 'rgba(255, 0, 0, 0)'
      },
      update (el, binding) {
        el.style.color = 'rgba(255, 0, 0, ' + binding.value / 100 + ')'
      }
    }
  }
}
</script>

<style scoped>
#example {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 12px;
  text-align: center;
}
</style>
