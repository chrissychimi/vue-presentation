<template>
  <div id="what">
    <div id="bubbles">
      <bubble v-for="point in points" v-on:remove="pointRemove(point.id)" :key="point.id" :text="point.title" :example="point.example" :list="point.list" :rand="random"></bubble>
    </div>
    <img id="shuffle-button" v-if="points.length > 0" @click="shuffle" aria-label="Shuffle" src="../assets/shuffle.svg"/>
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
        {id: 1, title: 'Reactivity', example: ExampleReactivity},
        {id: 2, title: 'Text filtering', example: ExampleFilter},
        {id: 3, title: 'Directives', example: ExampleDirective},
        {id: 4, title: 'Single-file components', list: ['html template', 'javascript', 'css']},
        {id: 5, title: 'Reusable components'}
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
