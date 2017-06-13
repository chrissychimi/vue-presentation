<template>
  <div id="compare">
    <h2><router-link :to="{name: 'angular'}">Angular</router-link></h2>
    <h2><router-link :to="{name: 'react'}">React</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'compare'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  display: inline-block;
  padding: 30px;
}
h2 a {
  color: #2F875E;
  text-decoration: none;
}
</style>
