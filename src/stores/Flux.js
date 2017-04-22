import Fluxxor from 'fluxxor';
import AlbumStore from './AlbumStore';
import {actions} from '../actions/actions';

var stores = {
    AlbumStore: new AlbumStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

module.exports = flux;
