<template>
  <div id="compare-angular">
    <lists :listsToDisplay="listsToDisplay"></lists>
  </div>
</template>

<script>
import Lists from './Lists'
export default {
  name: 'angular',
  components: {
    Lists
  },
  data () {
    return {
      listsToDisplay: [
        {
          id: 'angular',
          header: 'Angular',
          borderColor: 'red',
          items: [
            {text: 'Extensive use of Typescript', show: true},
            {text: 'One Right Way', show: false},
            {text: 'Designed for large, complex apps', show: false}
          ]
        },
        {
          id: 'vue',
          header: 'VueJS',
          borderColor: '#2c3e50',
          items: [
            {text: 'Typescript optional', show: false},
            {text: 'Smaller', show: false},
            {text: 'Relatively unopinionated', show: false},
            {text: 'Shallower learning curve', show: false}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
