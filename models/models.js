var MessageStore = Backbone.Collection.extend({
    model: Backbone.Model.extend()
});

var PubSubModel = Backbone.Model.extend({
    data: {},
    listeners: [],
    isSubscribed: true,

    publish: function (channel, options, context) {
        this.data = {};
        this.data = options;
        this.dispatch('publish', channel, context);
    },

    subscribe: function (channel, listener) {
        if (this.listeners[channel] !== channel)this.listeners[channel] = [];
        this.listeners[channel].push(listener);
    },

    unsubscribe: function (channel, context) {
        this.dispatch('unsubscribe', channel, context);
    },

    dispatch: function (action, channel, context) {
        if (Object.prototype.toString.call(this.listeners[channel]) === '[object Array]') {
            for (var i = 0; i < this.listeners[channel].length; i++) {
                if (action == 'publish' && context == this.isSubscribed) {
                    this.listeners[channel][i](this.data);
                } else {
                    return false;
                }
            }
        }
    }
});

var PubSub = new PubSubModel();