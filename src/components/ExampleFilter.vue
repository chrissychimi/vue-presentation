<template>
  <div id="example">
    <input v-model="thing" placeholder="edit me">
    <p>Thing one: {{ thing | one }}</p>
    <p>Thing two: {{ thing | two }}</p>
    <p>Thing three: {{ thing | three }}</p>
    <p>Thing four: {{ thing | one | two | three }}</p>
  </div>
</template>

<script>
export default {
  name: 'example-filter',
  data () {
    return {
      thing: ''
    }
  },
  filters: {
    one (value) {
      if (!value) return ''
      return value.split('').map((x, i) => {
        return i % 2 === 0 ? x.toLowerCase() : x.toUpperCase()
      }).join('')
    },
    two (value) {
      if (!value) return ''
      return value.split('').map((x) => {
        return String.fromCharCode(x.charCodeAt(0) + 9952)
      }).join('')
    },
    three (value) {
      if (!value) return ''
      return value.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
#example {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 8px;
}
input {
  text-align: center;
  font-size: 8px;
}
</style>
