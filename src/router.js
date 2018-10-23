import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/maintext',
      name: 'maintext',
      component: () =>
        import( /* webpackChunkName: "MainText" */ './views/MainText.vue'),
    },
    {
      path: 'work',
      name: 'work',
      component: () =>
        import( /* webpackChunkName: "work" */ './views/work.vue'),
    },
    {
      path: '/',
      name: 'guide',
      component: () =>
        import( /* webpackChunkName: "Guide" */ './views/Guide.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () =>
        import( /* webpackChunkName: "Main" */ './views/Main.vue'),
      children: [


        {
          path: 'works',
          name: 'works',
          component: () =>
            import( /* webpackChunkName: "MainWork" */ './views/MainWork.vue'),
        },

        {
          path: 'about',
          name: 'about',
          component: () =>
            import( /* webpackChunkName: "MainAbout" */ './views/MainAbout.vue'),
        },

        {
          path: 'home',
          name: 'home',
          component: () =>
            import( /* webpackChunkName: "MainHome" */ './views/MainHome.vue'),
        },


      ]
    },
  ],
})