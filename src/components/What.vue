<template>
  <div id="what">
    <bubble v-for="point in points" v-on:remove="pointRemove(point.id)" :key="point.id" :text="point.title" :example="point.example" :rand="random"></bubble>
    <button id="shuffle-button" v-if="points.length > 0" type="button" @click="shuffle" aria-label="Shuffle">
      <span aria-hidden="true">Shuffle</span>
    </button>
  </div>
</template>

<script>
import Bubble from './Bubble'
import ExampleReactivity from './ExampleReactivity'
import ExampleFilter from './ExampleFilter'
import ExampleDirective from './ExampleDirective'
import mixins from '@/mixins/mixins.js'

export default {
  name: 'what',
  components: {
    Bubble,
    ExampleReactivity,
    ExampleFilter,
    ExampleDirective
  },
  mixins: [mixins],
  data () {
    return {
      points: [
        {id: 0, title: 'Incrementally adoptable UI framework'},
        {id: 1, title: 'Use a little or use a lot'},
        {id: 2, title: 'Reactivity', example: ExampleReactivity},
        {id: 3, title: 'Text filtering', example: ExampleFilter},
        {id: 4, title: 'Directives', example: ExampleDirective},
        {id: 5, title: 'Single-file components'}
      ],
      random: null
    }
  },
  created () {
    this.random = Math.random()
  },
  methods: {
    shuffle () {
      this.points = this.points.sort((a, b) => {
        return this.getRandomNumberMinMax(-1, 1)
      })
      this.random = Math.random()
    },
    pointRemove (id) {
      this.points = this.points.filter((el, ind) => {
        return el.id !== id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shuffle-button {
  position: absolute;
  bottom: 15px;
}
</style>
