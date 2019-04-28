/* global Vue */

const searchResult = new Vue({
  el: '#search',
  data: {
    keywords: '',
    items: []
  },
  methods: {
    search: function () {
      this.$http.get(`/search/${this.keywords}`).then((response) => {
        this.items = response.body
      }, () => {
        console.error('Request to search endpoint failed.')
      })
    }
  }
})
