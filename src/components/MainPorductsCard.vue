<template>
  <div>
    <img src=""
      alt="">
  </div>
</template>
<script>
export default {
  props: {
    /**
     * proImg:产品图片
     * proName:产品名
     * proTags:产品标签
     * proContent:产品详情
     */
    proList: {
      type: Array,
      default: () => {
        return [
          {
            proImg:"",
          }
        ]
      },
    },
  },
}
</script>

