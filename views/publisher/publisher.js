var PublisherView = BaseView.extend({
    id: null,
    userName: null,
    isSubscribed: true,
    templateUrl: 'views/publisher/publisher.html',
    events: {
        "click #sendMsg": "typeNewMessage",
        "click #interrupt": "interrupt"
    },

    onInitialize: function () {
        this.userName = this.id;
    },

    clearInput: function () {
        this.$el.find('input').val('');
    },

    typeNewMessage: function() {
        var text = this.$el.find('.messageText').val();
        if (this.isSubscribed) {
            PubSub.publish("chat", {text: text, user: this.userName}, this.isSubscribed);
        } else {
            PubSub.unsubscribe("chat", this.isSubscribed);
        }
        this.clearInput();
    },

    interrupt: function (e) {
        this.$el.find('#interrupt').text(this.isSubscribed ? 'Subscribe' : 'Unsubscribe');
        if (this.isSubscribed) {
            this.isSubscribed = false;
            e.preventDefault();
        } else {
            this.isSubscribed =true;
        }
    }
});