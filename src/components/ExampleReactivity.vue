<template>
  <div id="example">
    <input v-model="message" placeholder="edit me">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'example-reactivity',
  data () {
    return {
      message: 'Hello NRG!'
    }
  }
}
</script>

<style scoped>
#example {
  margin-left: 20px;
  margin-right: 20px;
  border-style: dashed;
  border-width: thin;
}
</style>
