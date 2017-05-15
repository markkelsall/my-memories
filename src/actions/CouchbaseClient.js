var CouchbaseClient = {
    query: function(query, success, failure) {
        fetch('/albums').then(function (res) {
            console.log(res);
            return res.json();
        }).then(function (list) {
            success(list);
        });
    },

    create: function(word, success, failure) {
        word.id = `${'album::'}${this.albumList.length+1}`;
        this.albumList.push(word);
        success(word);
    },

    delete: function (word, success, failure) {
        success(word);
    }
};

module.exports = CouchbaseClient;
