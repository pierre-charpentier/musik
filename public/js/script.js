var searchResult = new Vue({
    el: '#search',
    data: {
        keywords: '',
        items: []
    },
    methods: {
        search: function () {
            this.$http.get("search/" + this.keywords).then(function (response) {
                this.items = response.body;
            }, function (response) {
                console.log("error");
            });
        }
    }
});