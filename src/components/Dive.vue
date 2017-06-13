<template>
  <div id="dive" @click="showNext()" :style="{ 'border-color': borderColor }">
  <p v-for="line in vueConstructing" :style="paddingLeft(line.level)" v-html="translateSpans(line.html)"></p>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins.js'
const vueConstructed = [
  {level: 1, html: 'export default {', order: 1},
  {level: 2, html: '<option>name</option>: \'dive\',', order: 1},
  {level: 2, html: '<option>mixins</option>: [mixins],', order: 1},
  {level: 2, html: '<option>data</option> () {', order: 1},
  {level: 3, html: 'return {', order: 1},
  {level: 4, html: '<datum>orderNum</datum>: 1', order: 2},
  {level: 4, html: '<datum>vueArray</datum>: this.vueConstructing', order: 2},
  {level: 4, html: '<datum>borderColor</datum>: \'rgb(0, 0, 255)\'', order: 2},
  {level: 3, html: '}', order: 1},
  {level: 2, html: '},', order: 1},
  {level: 2, html: '<option>computed</option>: {', order: 3},
  {level: 3, html: '<datum>vueConstructing</datum> () {', order: 4},
  {level: 4, html: 'return vueConstructed.filter((line) => {', order: 4},
  {level: 5, html: 'return line.order <= this.orderNum', order: 4},
  {level: 4, html: '})', order: 4},
  {level: 3, html: '}', order: 4},
  {level: 2, html: '},', order: 3},
  {level: 2, html: '<option>methods</option>: {', order: 5},
  {level: 3, html: '<datum>paddingLeft</datum> (ind) {', order: 6},
  {level: 4, html: 'return {\'padding-left\': (10 * ind) + \'px\'}', order: 6},
  {level: 3, html: '}', order: 6},
  {level: 3, html: '<datum>translateSpans</datum> (text) {', order: 7},
  {level: 4, html: 'return text', order: 7},
  {level: 5, html: '.replace(\'&lt;option>\', \'&lt;span style="padding: 2px; font-weight: 800; border-color: blue; border-style: solid">\')', order: 7},
  {level: 5, html: '.replace(\'&lt;/option>\', \'&lt;/span>\')', order: 7},
  {level: 5, html: '.replace(\'&lt;datum>\', \'&lt;span style="color: green;">\')', order: 7},
  {level: 5, html: '.replace(\'&lt;/datum>\', \'&lt;/span>\')', order: 7},
  {level: 3, html: '}', order: 7},
  {level: 3, html: '<datum>showNext</datum> () {', order: 8},
  {level: 4, html: 'this.orderNum++', order: 8},
  {level: 3, html: '}', order: 8},
  {level: 3, html: '<datum>randomizeDivBorder</datum> () {', order: 9},
  {level: 4, html: 'this.borderColor = \'rgb(\' +', order: 9},
  {level: 5, html: 'this.getRandomNumberMinMax(0, 255) +', order: 9},
  {level: 5, html: '\', \' + this.getRandomNumberMinMax(0, 255) +', order: 9},
  {level: 5, html: '\', \' + this.getRandomNumberMinMax(0, 255) ', order: 9},
  {level: 3, html: '}', order: 9},
  {level: 2, html: '}', order: 5},
  {level: 2, html: '<option>beforeUpdate</option> () {', order: 10},
  {level: 3, html: 'this.randomizeDivBorder()', order: 10},
  {level: 2, html: '}', order: 10},
  {level: 1, html: '}', order: 1}
]
export default {
  name: 'dive',
  mixins: [mixins],
  data () {
    return {
      orderNum: 1,
      vueArray: this.vueConstructing,
      borderColor: 'rgb(0, 0, 255)'
    }
  },
  computed: {
    vueConstructing () {
      return vueConstructed.filter((line) => {
        return line.order <= this.orderNum
      })
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
    },
    showNext () {
      this.orderNum++
    },
    randomizeDivBorder () {
      this.borderColor = 'rgb(' +
        this.getRandomNumberMinMax(0, 255) +
        ', ' + this.getRandomNumberMinMax(0, 255) +
        ', ' + this.getRandomNumberMinMax(0, 255) + ')'
    }
  },
  beforeUpdate () {
    this.randomizeDivBorder()
  }
}
</script>

<style scoped>
#dive {
  font-family: monospace;
  font-size: 14px;
  display: inline-block;
  width: 700px;
  border-style: solid;
}
#dive p {
  text-align: left;
}
</style>
