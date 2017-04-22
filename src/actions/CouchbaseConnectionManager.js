let couchbase = require('couchbase');
let logger = require('../utils/logger');
let {BUCKET} = require('../utils/constants');

let ConnectionManager = {

    connectBucket: function () {
        if (this._bucket) {
            return this._bucket;
        }
        let cluster = new couchbase.Cluster();
        this._bucket = cluster.openBucket(BUCKET);

        return this._bucket;
    },

    disconnectBucket: function () {
        if (this._bucket) {
            this._bucket.disconnect();
        }
    }
}
