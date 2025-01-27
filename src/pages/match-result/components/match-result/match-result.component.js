const axios = require("axios");
const moment = require("moment");

module.exports = {
    onCreate(input) {
        const match = input.match;

        match.started = moment(match.created_at).format('YYYY-MM-DD HH:mm:ss');
        match.finished = match.end_time === undefined ? '-' : moment(match.end_time).format('YYYY-MM-DD HH:mm:ss');
        match.duration = moment.duration(moment(match.last_throw_time).diff(match.first_throw_time)).asMinutes().toFixed();

        this.state = {
            match: match
        }
    },
    onMount() {
        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
    },
    onKeyDown(e) {
        switch (e.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                const idx = parseInt(e.key) - 1; // Match array index
                const leg = this.state.match.legs[idx];
                if (leg) {
                    location.href = `/legs/${leg.id}/result`;
                }
                break;
            default: // NOOP
        }
    },
    onRematch() {
        axios.post(`${window.location.origin}/matches/${this.state.match.id}/rematch`, null)
            .then(response => {
                location.href = `/legs/${response.data.current_leg_id}`;
            }).catch(error => {
                alert(`Unable to rematch, see log for details (${error.statusText})`);
            });
    }
}