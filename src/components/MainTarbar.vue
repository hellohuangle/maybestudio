<template>
  <div class="main-bar">
    <router-link v-for="(item,index) in tarbarList"
      :to="'/'+item.href"
      activeClass="main-bar__active"
      :key="index"
      class="main-tarbar"
      :href="item.desp">
      <i :class="item.icon"
        class="iconfont main-icon"></i>
      <span v-if="item.name"
        class="main-bar__name">{{item.name}}</span>
    </router-link>
    
  </div>

</template>

<script>
export default {
  /**
   * name:名字
   * icon:图标
   * activeIcon：激活图标
   * desp:跳转地址
   */
  props: {
    navList: {
      type: Array,
      requied: true,
      default: [],
    },
    Userlink: {
      type: String,
      default: '',
    },
    Username: {
      type: String,
      default: '',
    },
    tarbarList: {
      type: Array,
      default: () => {
        return [
          {
            name: '',
            icon: '',
            activeIcon: '',
            desp: '',
          },
        ]
      },
    },
  },
}
</script>
<style lang="less">
.main-bar {
  height: 0.98rem;
  width: 100%;
  background-color: #151515;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.main-tarbar {
  display: flex;
  flex-direction: column;
  width: 33.33%;
}
.main-icon {
  font-size: 30px;
  line-height: 30px;
}
.main-bar__name {
  color: #fff;
  font-size: 12px;
}
.main-bar__active {
}
</style>


