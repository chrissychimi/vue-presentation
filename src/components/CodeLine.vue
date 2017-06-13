<template>
  <p :style="paddingLeft(line.level)"
      v-html="translateSpans(line.html)"></p>
  </div>
</template>

<script>
export default {
  name: 'code-line',
  props: ['line'],
  data () {
    return {
    }
  },
  methods: {
    paddingLeft (ind) {
      return {'padding-left': (10 * ind) + 'px'}
    },
    translateSpans (text) {
      return text
        .replace('<option>', '<span style="padding: 2px; font-weight: 800; border-color: blue; border-style: solid">')
        .replace('</option>', '</span>')
        .replace('<datum>', '<span style="color: green;">')
        .replace('</datum>', '</span>')
    }
  },
  mounted () {
    if (this.line.focus) {
      this.$nextTick(() => {
        this.$el.scrollIntoView(true)
      })
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>
