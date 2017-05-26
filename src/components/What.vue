<template>
  <div id="what">
    <bubble v-for="(point, index) in points" :key="index" :text="point.title" :example="point.example"></bubble>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
