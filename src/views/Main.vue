<template>
  <div class="main-flex">
    <div class="main-flex__header">
      <MainHeader />
    </div>
    <div class="main-flex__conent">
      <router-view />
    </div>
    <div class="main-flex__footer">
      <MainTarbar :tarbarList="barList" />
    </div>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader'
import MainTarbar from '../components/MainTarbar'

export default {
  components: {
    MainHeader,
    MainTarbar,
  },
  data() {
    return {
      barList: [
        /**
         * name:名字
         * icon:图标
         * activeIcon：激活图标
         * desp:跳转地址
         */
        {
          name: 'HOME',
          icon: 'icon-icon_home--',
          activeIcon: 'icon-icon_home--',
          desp: 'home',
          href: 'home',
        },
        {
          name: 'ABOUT',
          icon: 'icon-icon_aboutme-',
          activeIcon: 'icon-icon_aboutme-',
          desp: 'about',
          href: 'home',
        },
        {
          name: 'WORKS',
          icon: 'icon-icon_work-',
          activeIcon: 'icon-icon_work-',
          desp: 'works',
          href: 'home',
        },
      ],
    }
  },
}
</script>

