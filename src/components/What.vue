<template>
  <div class="what">
    <bubble v-for="(point, index) in points" :key="index" :text="point"></bubble>
  </div>
</template>

<script>
import Bubble from './Bubble'

export default {
  name: 'what',
  components: {
    Bubble
  },
  data () {
    return {
      points: [
        'Incrementally adoptable UI framework',
        'Use a little or use a lot',
        'Reactivity',
        'Text interpolation',
        'Directives',
        'Single-file components'
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
