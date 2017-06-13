<template>
	<div class="list" @click="addTip()">
    <div :id="listId">
      <h2>{{ header }}</h2>
      <ul>
        <li v-for="item in list" v-if="item.show">
          <router-link v-if="item.localLink" :to="{name: item.localLink}">{{ item.text }}</router-link>
          <span v-else>{{ item.text }}</span>
          <sup><a v-for="(link, index) in item.externalLinks" class="footnote" :href="link" target="_blank">{{ hexStr(index) }}</a></sup>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['listItems', 'listId', 'header'],
  data () {
    return {
      list: this.listItems
    }
  },
  methods: {
    hexStr (add) {
      return String.fromCharCode(97 + add)
    },
    addTip () {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].show === false) {
          this.$set(this.list[i], 'show', true)
          break
        }
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
