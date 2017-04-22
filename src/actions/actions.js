import CouchbaseClient from "./CouchbaseClient";

let constants = {
    LOAD_MANY: 'LOAD_MANY',
    ADD: 'ADD'
};

let actions = {
    loadMany: function(request) {
        let response = {
            request,
            action: `${constants.LOAD_MANY}_${request.documentType.toUpperCase()}`
        };
        CouchbaseClient.load(request, (albumList) => {
            response.albumList = albumList;
            this.dispatch(response.action, response);
        }, (error) => {
            response.error = error;
            this.dispatch(response.action, response);
        });
    },

    create: function(request) {
        let response = {
            request,
            action: `${constants.ADD}_${request.documentType.toUpperCase()}`
        };
        CouchbaseClient.create(request, (album) => {
            response.album = album;
            this.dispatch(response.action, response);
            this.flux.actions.loadMany({documentType:request.documentType});
        }, (error) => {
            response.error = error;
            this.dispatch(response.action, response);
        });
    }
}

module.exports = {
    actions,
    constants
};
