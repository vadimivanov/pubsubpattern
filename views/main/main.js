var MainView = BaseView.extend({
    templateUrl: 'views/main/main.html',
    views: {
        publisherView: null,
        chatView: null
    },
    events: {
        "click #addPublisher": "addPublisher"
    },

    onInitialize: function () {
        this.views.chatView = new ChatView();
   },

    onRender: function() {
        var chat = this.$('#chatView');
        chat.html(this.views.chatView.el);
        this.addPublisher("Bob");
    },

    addPublisher: function (user) {
        var name = this.$el.find('.publisherName').val();
        var newPublisher = new PublisherView({id: name || user});
        this.$el.find('#publisherContainer').append(newPublisher.el);
    }
});