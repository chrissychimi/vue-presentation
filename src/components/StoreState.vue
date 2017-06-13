<template>
  <div id="store-component">
    <lists :listsToDisplay="listsToDisplay"></lists>
  </div>
</template>

<script>
import Lists from './Lists'
export default {
  name: 'store-state',
  components: {
    Lists
  },
  data () {
    return {
      listsToDisplay: [
        {
          id: 'pros',
          header: 'Pros',
          borderColor: 'green',
          items: [
            {text: 'Access', show: true},
            {text: 'Communication', show: false}
          ]
        },
        {
          id: 'cons',
          header: 'Cons',
          borderColor: 'navy',
          items: [
            {text: 'Two-way binding', localLink: 'vmodel', externalLinks: ['https://vuex.vuejs.org/en/forms.html'], show: true},
            {text: 'Decision-making', show: false}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
