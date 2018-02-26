import Vue from 'vue'
import store from './store'


import App from './components/App'

new Vue({
    el: '#app',
    render: h => h(App),
    store
})
