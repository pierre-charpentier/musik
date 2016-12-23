var searchResult = new Vue({
    el: '#search',
    data: {
        keywords: '',
        items: []
    },
    methods: {
        search: function () {
            this.$http.get("http://localhost:3000/search/" + this.keywords).then(function (response) {
                this.items = response.body;
            }, function (response) {
                console.log("error");
            });
        }
    }
});