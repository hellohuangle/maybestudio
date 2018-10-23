<template>
  <div>
    <div>
      <img :src="logoImg"
        alt="">
      <MainGuide />
    </div>

    <el-switch v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
import logoImg from '../assets/images/logo.png'
import MainGuide from '../components/MainGuide'
export default {
  components: {
    MainGuide,
  },
  data() {
    return {
      logoImg: logoImg,
      value1: true,
      value2: true,
    }
  },
}
</script>



  
