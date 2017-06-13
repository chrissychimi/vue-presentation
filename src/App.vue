<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.png" :class="{small: menuState.iconShrunk, right: menuState.iconMinimized}" @click="animateMenu">
      <transition-group name="bounceRight" tag="ul" id="topic-list">
        <li v-if="menuState.navShown" v-for="(topic, index) in topics" :key="index">
          <router-link :id="topic.slug" :to="{name: topic.slug}">{{ topic.title }}</router-link>
        </li>
      </transition-group>
    </div>
    <div id="component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      topics: [
        {title: 'What Is Vue', slug: 'what'},
        {title: 'Compare', slug: 'compare'},
        {title: 'Dive In', slug: 'dive'},
        {title: 'Store', slug: 'store-state'},
        {title: 'Test', slug: 'test'},
        {title: 'Explore', slug: 'explore'}
      ]
    }
  },
  computed: mapState([
    'menuState'
  ]),
  methods: {
    ...mapMutations([
      'setMenuStateInitial',
      'setMenuStateNavigate',
      'setMenuStateUnobtrusive'
    ]),
    animateMenu () {
      if (this.menuState.navShown) {
        this.$store.commit('setMenuStateInitial')
      } else {
        this.$store.commit('setMenuStateNavigate')
      }
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
img.right {
  position: absolute;
  top: 5px;
  right: 5px;
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
