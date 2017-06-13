<template>
	<div id="lists">
    <list v-for="(list, index) in listsToDisplay" :key="index" :listItems="list.items" :listId="list.id" :header="list.header" :style="{ width: width + '%', 'border-color': list.borderColor }"></list>
  </div>
</template>

<script>
import List from './List'
export default {
  name: 'lists',
  props: ['listsToDisplay'],
  components: {
    List
  },
  computed: {
    width () {
      return (100 / this.listsToDisplay.length) - 5
    }
  }
}
</script>

<style scoped>
#lists {
  height: 250px;
}
.list {
  display: inline-block;
  vertical-align: top;
  border-style: inset;
  height: 100%;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
