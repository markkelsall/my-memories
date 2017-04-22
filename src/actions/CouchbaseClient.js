var CouchbaseClient = {
    albumList: [
        {
            documentType: 'album',
            album: 'test'
        },
        {
            documentType: 'album',
            album: 'test1'
        }
    ],
    load: function(query, success, failure) {
        success(this.albumList);
    },

    create: function(word, success, failure) {
        this.albumList.push(word);
        success(word);
    },

    delete: function (word, success, failure) {
        success(word);
    }
};

module.exports = CouchbaseClient;
