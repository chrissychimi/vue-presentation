<template>
  <div id="vmodel-component">
    <div id="states">
      <div id="local" class="local">
        <h2>Local State</h2>
        <p>Beloved sensates:<br/>{{ sensates }}</p>
      </div>
      <div id="store" class="global">
        <h2>Store State</h2>
        <p>Beloved sapiens:<br/>{{ sapiens }}</p>
      </div>
    </div>
    <div id="local-circle" class="circle">
      <p><b>v-model="sensates"</b></p>
      <p>automatic<br/>two-way binding</p>
    </div>
    <div id="global-circle" class="circle">
      <p><b>v-model="sapiens"</b></p>
      <p>getter: get stored value</p>
      <p>setter: commit mutation</p>
    </div>
    <div id="component">
      <h2>Component</h2>
      <div id="selections">
        <div id="local-checks" class="local">
          <div class="labeledinput">
            <input v-model="sensates" type="checkbox" name="sensates" id="riley" value="Riley"/>
            <label for="riley">RILEY</label>
          </div>
          <div class="labeledinput">
            <input v-model="sensates" type="checkbox" name="sensates" id="lito" value="Lito"/>
            <label for="lito">LITO</label>
          </div>
          <div class="labeledinput">
            <input v-model="sensates" type="checkbox" name="sensates" id="sun" value="Sun"/>
            <label for="one">SUN</label>
          </div>
        </div>
        <div id="global-checks" class="global">
          <div class="labeledinput">
            <input v-model="sapiens" type="checkbox" name="sapiens" id="amanita" value="Amanita"/>
            <label for="amanita">AMANITA</label>
          </div>
          <div class="labeledinput">
            <input v-model="sapiens" type="checkbox" name="sapiens" id="bug" value="Bug"/>
            <label for="bug">BUG</label>
          </div>
          <div class="labeledinput">
            <input v-model="sapiens" type="checkbox" name="sapiens" id="hernando" value="Hernando"/>
            <label for="hernando">HERNANDO</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vmodel',
  data () {
    return {
      sensates: []
    }
  },
  computed: {
    sapiens: {
      get () {
        return this.$store.state.sapiens
      },
      set (val) {
        this.$store.commit('setSapiens', {sapiens: val})
      }
    }
  }
}
</script>

<style scoped>
#store-component {
  text-align: center;
}
#component {
  position: absolute;
  bottom: 10px;
  text-align: center;
  display: inline-block;
  width: 300px;
  margin-left: -150px;
  border-style: solid;
  border-color: yellowgreen;
  background-color: azure;
}
#local, #store {
  position: absolute;
  width: 250px;
  border-radius: 10%;
  border-color: cadetblue;
  background-color: beige;
}
.local {
  border-style: dashed;
}
.global {
  border-style: dotted;
}
#local {
  left: 15px;
}
#store {
  right: 15px;
}
#local-checks, #global-checks {
  display: block;
  padding: 5px;
  margin: 5px;
}
#local-checks {
  float: left;
}
#global-checks {
  float: right;
}
.labeledinput {
  display: block;
  text-align: left;
}
.circle {
  position: absolute;
  top: 45%;
  border-style: solid;
  -webkit-border-radius: 30%;
  -moz-border-radius: 30%;
  border-radius: 30%;
  width: 200px;
  height: 200px;
  border-color: cornflowerblue;
  background-color: aliceblue;
}
#local-circle {
  left: 10%;
;
}
#global-circle {
  right: 10%;
}
</style>
