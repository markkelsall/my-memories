import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../modules/Layout.jsx';

export default class Album extends Layout {

    static propTypes = {
        album: PropTypes.object.isRequired
    }

    render() {
        return (
            <li key={this.props.album}>
                {this.props.album.album}
            </li>
        );
    }
};
