<template>
  <div class="home">
    <carousel-3d :controls-visible="true" :clickable="false">
      <slide v-for="(topic, i) in topics" :index="i" @click="goToTopic(topic.slug)">
        {{ topic.title }}
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'home',
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      topics: [{title: 'What Is Vue', slug: 'what'}, {title: 'Comparisons', slug: 'who'}, {title: 'Vue In-depth', slug: 'why'}, {title: 'Vuex', slug: 'where'}, {title: 'Testing', slug: 'how'}, {title: 'Plugins/Extras', slug: 'when'}]
    }
  },
  methods: {
    goToTopic (slug) {
      this.$router.push(slug)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
