// todo use extend properly
var SecondPublisher = Backbone.View.extend({

    templateUrl: 'views/second_publisher/second_publisher.html',
    events: { "click #sendMsgSecondUser": "typeNewMessage" },
    template: null,

    initialize: function () {
        var self = this;
        var parseTemplate = $.get(this.templateUrl, function (data){
            self.template = _.template(data);
            self.render();
        }, 'html');
        console.log(parseTemplate);
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    typeNewMessage: function() {
        var text = this.$el.find('.messageTextSecondUser').val();
        // todo do not use globals
        ChatView.showScreen;
        PubSub.publish("chat", {text: text, user: 'Gomer'});
    }
});