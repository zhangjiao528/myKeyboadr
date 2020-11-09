<template>
<div class="keybox">
  <ul class='keyboards'>
    <li v-for='(item, index) in keyLists' :key='index' :class="{'empty': !item}" @click="clickKey(item)">
      <span class="iconfont icon-shanchu" v-if="item === 'delete'"></span>
      <span class="caps-lock" v-else-if="item === 'Caps Lock'">{{ item }}</span>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MyKeyboards',
  data () {
    return {
      keyValue: '',
      keyLists: ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '', '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'delete', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '@', '.', '_', '', 'Caps Lock']
    }
  },
  methods: {
    clickKey (key) {
      switch (key) {
        case 'delete': {
          const kbt = this.keyValue
          this.keyValue = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt
          break
        }
        default: {
          this.keyValue += key
          break
        }
      }
      this.$emit('getKeyValue', this.keyValue)
    }
  }
}
</script>

<style scoped>
.keybox{
  width: 1080px;
  height: 300px;
  margin: 0 auto;
  padding: 17px 26px;
  border: 1px solid #000;
  box-sizing: border-box;
}
.keyboards{
  display: flex;
  flex-wrap: wrap;
  width: 1028px;
  height: 266px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  border: 1px solid #000;
  box-sizing: border-box;
}
.keyboards li{
  margin: 0 20px 15px 0;
  width: 80px;
  height: 55px;
  line-height: 50px;
  text-align: center;
  border: 2px solid #D2D2D2;
  border-radius: 10px;
  color: #333;
  font-family: PingFang SC;
  font-size: 22px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
}
.keyboards li .caps-lock{
  font-size: 14px;
}
.keyboards li.empty{
  width: 6px;
  height: 55px;
  border: 0;
}
</style>
