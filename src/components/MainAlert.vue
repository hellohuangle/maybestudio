<template>
  <div>
    <el-radio 
      v-model="radio"
      label="1">备选项</el-radio>
    <el-radio 
      v-model="radio"
      label="2">备选项</el-radio>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    radio: {
      get() {
        return this.value
      },
      set() {},
    },
  },
  method: {
    textdata() {
      const a = '23424'
      consle.log(a)
    },
  },
}
</script>

