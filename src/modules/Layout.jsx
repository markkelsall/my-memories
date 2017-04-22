import React, {Component} from "react";
import Fluxxor from 'fluxxor';
import reactMixin from 'react-mixin';
import PropTypes from 'prop-types';

export default class Layout extends Component {

    static contextTypes = {
        flux: PropTypes.object
    };

    render () {
        return null;
    }
};

var FluxMixin = Fluxxor.FluxMixin(React);
reactMixin.onClass(Layout, FluxMixin);
