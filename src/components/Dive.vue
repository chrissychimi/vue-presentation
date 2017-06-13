<template>
  <div id="dive" @click="showNext()" :style="{ 'border-color': borderColor }">
    <code-line v-for="line in vueConstructing" :key="line.id" :line="line"></code-line>
  </div>
</template>

<script>
import CodeLine from './CodeLine'
import mixins from '@/mixins/mixins.js'
const vueConstructed = [
  {id: 1, level: 1, html: 'export default {', order: 1},
  {id: 2, level: 2, html: '<option>name</option>: \'dive\',', order: 1},
  {id: 7, level: 2, html: '<option>components</option>: {<datum>CodeLine</datum>},', order: 1},
  {id: 3, level: 2, html: '<option>mixins</option>: [<datum>mixins</datum>],', order: 1},
  {id: 4, level: 2, html: '<option>data</option> () {', order: 1},
  {id: 5, level: 3, html: 'return {', order: 1},
  {id: 6, level: 4, html: '<datum>orderNum</datum>: 1', order: 2, focus: true},
  {id: 8, level: 4, html: '<datum>borderColor</datum>: \'rgb(0, 0, 255)\'', order: 2},
  {id: 9, level: 3, html: '}', order: 1},
  {id: 10, level: 2, html: '},', order: 1},
  {id: 11, level: 2, html: '<option>computed</option>: {', order: 3, focus: true},
  {id: 12, level: 3, html: '<datum>vueConstructing</datum> () {', order: 4},
  {id: 13, level: 4, html: 'return vueConstructed.filter((line) => {', order: 4},
  {id: 14, level: 5, html: 'return line.order <= this.orderNum', order: 4},
  {id: 15, level: 4, html: '})', order: 4},
  {id: 16, level: 3, html: '}', order: 4},
  {id: 17, level: 2, html: '},', order: 3},
  {id: 18, level: 2, html: '<option>methods</option>: {', order: 5, focus: true},
  {id: 29, level: 3, html: '<datum>showNext</datum> () {', order: 6},
  {id: 30, level: 4, html: 'this.orderNum++', order: 6},
  {id: 31, level: 3, html: '}', order: 6},
  {id: 32, level: 3, html: '<datum>randomizeDivBorder</datum> () {', order: 7},
  {id: 43, level: 4, html: 'okToUpdate = false', order: 7},
  {id: 33, level: 4, html: 'this.borderColor = \'rgb(\' +', order: 7},
  {id: 34, level: 5, html: 'this.getRandomNumberMinMax(0, 255) +', order: 7},
  {id: 35, level: 5, html: '\', \' + this.getRandomNumberMinMax(0, 255) +', order: 7},
  {id: 36, level: 5, html: '\', \' + this.getRandomNumberMinMax(0, 255) ', order: 7},
  {id: 37, level: 3, html: '}', order: 7},
  {id: 38, level: 2, html: '}', order: 5},
  {id: 39, level: 2, html: '<option>beforeUpdate</option> () {', order: 8, focus: true},
  {id: 44, level: 3, html: 'if (okToUpdate) {', order: 8},
  {id: 40, level: 4, html: 'this.randomizeDivBorder()', order: 8},
  {id: 45, level: 3, html: '}', order: 8},
  {id: 41, level: 2, html: '},', order: 8},
  {id: 46, level: 2, html: '<option>updated</option> () {', order: 9, focus: true},
  {id: 47, level: 3, html: 'okToUpdate = true', order: 9},
  {id: 41, level: 2, html: '}', order: 8},
  {id: 42, level: 1, html: '}', order: 1}
]
var okToUpdate = true

export default {
  name: 'dive',
  components: {CodeLine},
  mixins: [mixins],
  data () {
    return {
      orderNum: 1,
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
    showNext () {
      this.orderNum++
    },
    randomizeDivBorder () {
      okToUpdate = false
      this.borderColor = 'rgb(' +
        this.getRandomNumberMinMax(0, 255) +
        ', ' + this.getRandomNumberMinMax(0, 255) +
        ', ' + this.getRandomNumberMinMax(0, 255) + ')'
    }
  },
  beforeUpdate () {
    if (okToUpdate) {
      this.randomizeDivBorder()
    }
  },
  updated () {
    okToUpdate = true
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
</style>
