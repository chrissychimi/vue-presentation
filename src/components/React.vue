<template>
  <div id="compare-react">
    <lists :listsToDisplay="listsToDisplay"></lists>
  </div>
</template>

<script>
import Lists from './Lists'
export default {
  name: 'react',
  components: {
    Lists
  },
  data () {
    return {
      listsToDisplay: [
        {
          id: 'react',
          header: 'React',
          borderColor: '#00d8ff',
          items: [
            {text: 'Write JS. If you want to write a for loop, you write a for loop. You don\'t have to look in the docs for how to set up a v-for.', show: true},
            {text: 'Tooling is more mature', show: false},
            {text: 'CSS may be complicated, CSS-in-JS', show: false},
            {text: 'Richer ecosystem of developers', show: false},
            {text: 'Native support for mobile apps', show: false},
            {text: 'Embraces functional programming and immutability (although with Vuex Vue becomes more like this)', show: false}
          ]
        },
        {
          id: 'vue',
          header: 'VueJS',
          borderColor: '#2c3e50',
          items: [
            {text: 'Optimization (keeps track of which children depend on which props and doesn\'t re-render needlessly)', show: false},
            {text: 'Write HTML. No need to translate the familiar.', show: false},
            {text: 'Migrating existing projects. You could bring static HTML pages right into Vue, adding reactivity and other functionality incrementally.', show: false},
            {text: 'Easier for non-dev designers to understand', show: false},
            {text: 'CSS is easy and scopable (unique data attributes)', show: false},
            {text: 'Official support for main companion libraries', show: false},
            {text: 'CLI that allows user templates (React is working on this)', show: false},
            {text: 'Shallower learning curve', show: false},
            {text: 'Working with Weex (Alibaba) to develop cross-platform support', show: false},
            {text: 'Mutability does have some benefits, particularly for readability', show: false}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
