<template>
	<div id="test">
    <lists :listsToDisplay="listsToDisplay"></lists>
  </div>
</template>

<script>
import Lists from './Lists'
export default {
  name: 'test',
  components: {
    Lists
  },
  data () {
    return {
      listsToDisplay: [
        {
          id: 'debug',
          header: 'Debugging',
          borderColor: 'purple',
          items: [
            {text: 'Vue Devtools', show: true},
            {text: 'Vue.config.errorHandler', show: false}
          ]
        },
        {
          id: 'unit',
          header: 'Unit Testing',
          borderColor: 'orange',
          items: [
            {text: 'Karma/mocha/chai/sinon', show: true},
            {text: 'Vue.nextTick()', show: false}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
