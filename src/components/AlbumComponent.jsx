import Layout from '../modules/Layout.jsx';
import Fluxxor from 'fluxxor';
import reactMixin from 'react-mixin';
import {constants} from '../actions/actions';

const store = 'ALBUM';

export default class AlbumComponent extends Layout {

    getStateFromFlux () {
        return this._getStateFromFlux();
    }

    _getStateFromFlux () {
        var response = this.getFlux().store("AlbumStore").response;
        if (response) {
            switch (response.action) {
                case `${constants.LOAD_MANY}_${store}`:
                    return this._setLoadAlbumListStateFromFlux(response);
                case `${constants.ADD}_${store}`:
                    return this._setAddAlbumStateFromFlux(response);
                default:
                    console.log('Sorry, computer says no');
            }
        }
    }

    /**
    *
    * @method _setLoadAlbumListStateFromFlux
    * can be overridden by the layout
    *
    */
    _setLoadAlbumListStateFromFlux (response) {
        return {
            error: response.error,
            albumList: response.albumList
        };
    }

    /**
    *
    * @method _setAddAlbumStateFromFlux
    * can be overridden by the layout
    *
    */
    _setAddAlbumStateFromFlux (response) {
        return {
            album: response.album
        };
    }

    load () {
        this.getFlux().actions.loadMany({documentType:store});
    }
};
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
reactMixin.onClass(AlbumComponent, StoreWatchMixin("AlbumStore"));
