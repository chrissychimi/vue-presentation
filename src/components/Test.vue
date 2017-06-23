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
            {text: 'Karma: test environment', externalLinks: ['https://karma-runner.github.io/1.0/intro/how-it-works.html'], show: false},
            {text: 'Mocha: test framework', externalLinks: ['https://mochajs.org/#getting-started'], show: false},
            {text: 'Chai: test assertion library', externalLinks: ['http://chaijs.com/api/bdd/'], show: false},
            {text: 'Sinon: test mocks and spies', externalLinks: ['http://sinonjs.org/releases/v2.3.5/spies/', 'https://github.com/domenic/sinon-chai'], show: false},
            {text: 'Istanbul: code coverage reporter', show: false},
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
