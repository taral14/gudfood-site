import moment from 'moment'

moment.locale('ru');
//const timezone = 'America/New_York'

export default {
    filters: {
        date: function (date) {
            return moment(date).format('DD MMMM (dddd)')
        },
        time: function (microtime) {
            return moment(parseInt(microtime)).format('HH:mm:ss')
        },
    },
    methods: {
        formatDate(microtime, format = 'DD MMM, HH:mm') {
            return moment(parseInt(microtime)).format(format)
        },
    }
}
