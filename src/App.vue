<template>
  <div id="app">
    邮箱地址：<input type="text" v-model="keyboards">
    <MyKeyboards @getKeyValue="updateKeyValue"/>
  </div>
</template>

<script>
import MyKeyboards from './components/MyKeyboards.vue'

export default {
  name: 'App',
  components: {
    MyKeyboards
  },
  data () {
    return {
      keyboards: ''
    }
  },
  created () {
  },
  methods: {
    updateKeyValue (keyValue) {
      this.keyboards = keyValue
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app input{
  width: 200px;
  height: 40px;
  margin-bottom: 50px;
}
</style>
