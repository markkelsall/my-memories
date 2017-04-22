import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flux from "./stores/Flux";
import ListAlbumLayout from "./layouts/ListAlbumLayout.jsx";

export default class App extends Component {

    static childContextTypes = {
        flux: PropTypes.object
    };

    getChildContext() {
        return {
            flux
        };
    }

    render() {
        return (
            <ListAlbumLayout/>
        );
    }
}
