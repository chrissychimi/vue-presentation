<template>
	<div id="lists" :style="{ 'grid-template-columns': 'repeat(' + cols + ', 1fr)' }">
    <list v-for="(list, index) in listsToDisplay" :key="index" :listItems="list.items" :listId="list.id" :header="list.header" :style="{ 'border-color': list.borderColor, 'grid-column': (index % cols) + 1 }"></list>
  </div>
</template>

<script>
import List from './List'
export default {
  name: 'lists',
  props: ['listsToDisplay', 'cols'],
  components: {
    List
  }
}
</script>

<style scoped>
#lists {
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: minmax(250px, auto);
  margin-top: 10px;
}
.list {
  vertical-align: top;
  border-style: inset;
}
</style>
