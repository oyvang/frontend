const _ = require('underscore');
const localstorage = require('../../../../util/localstorage.js');

module.exports = {
    onCreate(input) {
        this.state = {
            office: undefined,
            venues: input.venues,
            venue: undefined
        }
    },
    officeSelected(event, selected) {
        this.state.office = selected.input.data.id;
        this.state.venue = null;
        this.state.venues = _.reject(this.input.venues, (venue) => {
            return venue.office_id !== this.state.office;
        });
        if (this.state.venues.length === 1) {
            this.state.venue = this.state.venues[0].id;
        }
        this.setStateDirty('venues');
    },
    venueSelected(event, selected) {
        this.state.venue = selected.input.data.id;
    },
    onSave(event) {
        localstorage.set('office_id', this.state.office);
        localstorage.set('venue_id', this.state.venue);
        localstorage.set('controller', true);
        location.href = location.href.split("?")[0]; // Reload page
    }
}
