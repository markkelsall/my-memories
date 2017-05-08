var CouchbaseClient = {
    albumList: [
        {
            documentType: 'album',
            album: 'test',
            id: 'album::1'
        },
        {
            documentType: 'album',
            album: 'test1',
            id: 'album::2'
        }
    ],
    load: function(query, success, failure) {
        success(this.albumList);
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
