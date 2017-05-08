import React from 'react';
import AlbumComponent from '../components/AlbumComponent.jsx';
import Fluxxor from 'fluxxor';
import reactMixin from 'react-mixin';

export default class CreateAlbumLayout extends AlbumComponent {

    constructor () {
        super (...arguments);
        this.state = {
            addAlbum: ""
        };
    }

    handleSuggestedAlbumChange (e) {
        this.setState({addAlbum: e.target.value});
    }

    handleSubmitForm (e) {
        e.preventDefault();
        if (this.state.addAlbum.trim()) {
            let payload = {
                album: this.state.addAlbum,
                documentType: 'album'
            };
            this.getFlux().actions.create(payload);
            this.setState({addAlbum: ""});
        }
    }

    render() {
        return (
            <div>
                <h2>Create a New Album</h2>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <input type="text" value={this.state.addAlbum}
                        onChange={this.handleSuggestedAlbumChange.bind(this)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
};
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
reactMixin.onClass(CreateAlbumLayout, StoreWatchMixin("AlbumStore"));
