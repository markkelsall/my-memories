import React from 'react';
import AlbumComponent from '../components/AlbumComponent.jsx';
import RenderAlbumLayout from './RenderAlbumLayout.jsx';
import CreateAlbumLayout from './CreateAlbumLayout.jsx';
import Fluxxor from 'fluxxor';
import reactMixin from 'react-mixin';

export default class ListAlbumLayout extends AlbumComponent {

    componentDidMount () {
        this.query();
    }

    constructor () {
        super (...arguments);
        this.state = {
            albumList: []
        };
    }

    render() {
        return (
            <div>
                <h1>Albums</h1>
                {this.state.error ? "Error loading data" : null}
                <ul style={{lineHeight: "1.3em", minHeight: "13em"}}>
                    {this.state.albumList.map(function(album) {
                        return <RenderAlbumLayout key={album.id} album={album}/>;
                    })}
                </ul>
                <CreateAlbumLayout/>
            </div>
        );
    }
};
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
reactMixin.onClass(ListAlbumLayout, StoreWatchMixin("AlbumStore"));
