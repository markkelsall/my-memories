import React from 'react';
import AlbumComponent from '../components/AlbumComponent.jsx';
import Fluxxor from 'fluxxor';
import reactMixin from 'react-mixin';

export default class CreateAlbumLayout extends AlbumComponent {

    constructor () {
        super (...arguments);
        this.state = {
            suggestBuzzword: ""
        };
    }

    handleSuggestedWordChange (e) {
        this.setState({suggestBuzzword: e.target.value});
    }

    handleSubmitForm (e) {
        e.preventDefault();
        if (this.state.suggestBuzzword.trim()) {
            let payload = {
                album: this.state.suggestBuzzword,
                documentType: 'album'
            };
            this.getFlux().actions.create(payload);
            this.setState({suggestBuzzword: ""});
        }
    }

    render() {
        return (
            <div>
                <h2>Create a New Album</h2>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <input type="text" value={this.state.suggestBuzzword}
                        onChange={this.handleSuggestedWordChange.bind(this)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
};
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
reactMixin.onClass(CreateAlbumLayout, StoreWatchMixin("AlbumStore"));
