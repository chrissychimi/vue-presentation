<template>
  <div id="app">
    <img src="./assets/logo.png" :class="{small: shrinkVue}" @click="animateMenu">
    <transition-group name="bounceRight" tag="ul">
      <li v-if="showMenu" v-for="(topic, index) in topics" :key="index">
        <router-link :id="topic.slug" :to="{name: topic.slug}">{{ topic.title }}</router-link>
      </li>
    </transition-group>
    <router-view></router-view>
  </div>
</template>

<script>
import mixins from './mixins/mixins.js'

export default {
  name: 'app',
  mixins: [mixins],
  data () {
    return {
      topics: [
        {title: 'What Is Vue', slug: 'what'},
        {title: 'Compare', slug: 'compare'},
        {title: 'Dive In', slug: 'dive'},
        {title: 'Store', slug: 'store'},
        {title: 'Test', slug: 'test'},
        {title: 'Explore', slug: 'explore'}
      ],
      showMenu: false,
      shrinkVue: false
    }
  },
  methods: {
    animateMenu () {
      this.showMenu = !this.showMenu
      this.$nextTick(() => {
        this.shrinkVue = this.showMenu
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
img {
  width: 10%;
}
img.small {
  width: 3%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li:first-child {
  display: block;
}
li {
  display: inline-block;
  margin: 10px 10px;
  font-size: 20px;
}
li > a {
  text-decoration: none;
}
li > a:hover {
  font-weight: bold;
}
a {
  color: #42b983;
}
</style>
