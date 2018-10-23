<template>
  <div>
    <div>{{maintext}}</div>
    <div>{{textConents}}</div>
  </div>
</template>



<script>
export default {
  props: {
    textConents: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      maintext: '123423424',
    }
  },
}
</script>

