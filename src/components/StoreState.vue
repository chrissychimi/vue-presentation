<template>
  <div id="store-component">
    <div id="storeparts">
      <lists :listsToDisplay="storeparts" :cols="4"></lists>
    </div>
    <div id="prosandcons">
      <lists :listsToDisplay="prosandcons" :cols="2"></lists>
    </div>
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
      storeparts: [
        {
          id: 'state',
          header: 'State',
          borderColor: 'blue',
          items: [
            {text: 'Single source of truth', show: false},
            {text: '`mapState` helper generates computed getters', show: false},
            {text: 'Can only be changed via mutations', show: false},
            {text: 'Reactive store', show: false}
          ]
        },
        {
          id: 'getters',
          header: 'Getters',
          borderColor: 'green',
          items: [
            {text: 'Computed state', show: false},
            {text: 'Args: state, other getters, additional params', show: false},
            {text: '`mapGetters` helper generates computed getter getters', show: false}
          ]
        },
        {
          id: 'mutations',
          header: 'Mutations',
          borderColor: 'orange',
          items: [
            {text: 'The only way to change state', show: false},
            {text: 'Can only be called via `commit` function', show: false},
            {text: 'Args: state, payload object', show: false},
            {text: 'Always synchronous', show: false},
            {text: 'Vue dev tools capture before and after state', show: false}
          ]
        },
        {
          id: 'actions',
          header: 'Actions',
          borderColor: 'red',
          items: [
            {text: 'Actions call mutations', show: false},
            {text: 'Called via `dispatch` function', show: false},
            {text: 'Args: context (state, commit, getters), payload', show: false},
            {text: 'May be asynchronous, call multiple commits', show: false}
          ]
        }
      ],
      prosandcons: [
        {
          id: 'pros',
          header: 'Pros',
          borderColor: 'green',
          items: [
            {text: 'Access', show: false},
            {text: 'Communication', show: false}
          ]
        },
        {
          id: 'cons',
          header: 'Cons',
          borderColor: 'navy',
          items: [
            {text: 'Two-way binding', localLink: 'vmodel', externalLinks: ['https://vuex.vuejs.org/en/forms.html'], show: false},
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
