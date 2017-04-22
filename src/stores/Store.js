import Fluxxor from 'fluxxor';
import {constants} from '../actions/actions';

export default class Store {
    constructor (name) {
        if (name) {
            name = `_${name.toUpperCase()}`;

            return Fluxxor.createStore({
                initialize: function() {
                    this.bindActions(
                        `${constants.LOAD_MANY}${name}`, this.onChange,
                        `${constants.ADD}${name}`, this.onChange
                    );
                },

                onChange: function(response) {
                    this.response = response;
                    this.emit("change");
                }
            });
        }
    }
};
