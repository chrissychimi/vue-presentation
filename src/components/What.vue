<template>
  <div id="what">
    <bubble v-for="(point, index) in points" v-on:remove="pointRemove(index)" :key="index" :text="point.title" :example="point.example"></bubble>
    <button v-if="points.length > 0" type="button" @click="shuffle" aria-label="Shuffle">
      <span aria-hidden="true">Shuffle</span>
    </button>
  </div>
</template>

<script>
import Bubble from './Bubble'
import ExampleReactivity from './ExampleReactivity'
import ExampleFilter from './ExampleFilter'
import ExampleDirective from './ExampleDirective'

export default {
  name: 'what',
  components: {
    Bubble,
    ExampleReactivity,
    ExampleFilter,
    ExampleDirective
  },
  data () {
    return {
      points: [
        {title: 'Incrementally adoptable UI framework'},
        {title: 'Use a little or use a lot'},
        {title: 'Reactivity', example: ExampleReactivity},
        {title: 'Text filtering', example: ExampleFilter},
        {title: 'Directives', example: ExampleDirective},
        {title: 'Single-file components'}
      ]
    }
  },
  methods: {
    shuffle () {
      return true
    },
    pointRemove (ind) {
      this.points.splice(ind)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
